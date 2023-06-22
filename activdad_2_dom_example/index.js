var TotalValue = 0;
var SavingsValue = [];
var movements = [];

const UserCollection = database.collection('user-info');
const SavingCollection = database.collection('savings-data');
const MovementsCollection = database.collection('movements-data');

function loadTotalValue(value){
    if(!value)
        return;
    const totalElement = document.getElementById("DineroTotal");
    totalElement.innerText =  "$ " + TotalValue.toLocaleString() + ' MXN';
}

function loadSavingsValue(){
    const savingListElement = document.getElementById('saving-list');

    if(savingListElement.children.length){
        savingListElement.innerHTML = '';
    }

    SavingCollection.get().then(function(QuerySnapshot){
        QuerySnapshot.forEach(function(doc){
            SavingsValue = [];
            var data = doc.data();
            SavingsValue.push(data);
            
            console.log(SavingsValue);

            SavingsValue.forEach(saving => {
                const savingLiElement = document.createElement('li');
                const savingH4Element = document.createElement('h4');
                const savingH3Element = document.createElement('h3');
                const savingPElement = document.createElement('p');

                savingH4Element.innerText = getStringValue(saving.type);
                savingH3Element.innerText = '$ ' + saving.value.toFixed(2) + ' MXN';
                savingPElement.innerText = 'Actualizado el ' + saving.lastChange;

                
                savingLiElement.append(savingH4Element, savingH3Element, savingPElement);
                savingListElement.appendChild(savingLiElement);
            });
        })
    }).catch(function(error){
        console.log(error);
    });
    
}

function getStringValue(type){
    switch (type){
        case 'school':
            return 'Escuela';
        case 'doctor':
            return 'Doctor';
        case 'gasoline':
            return 'Gasolina';
        case 'food':
            return 'Comida';
        default:
            return 'Otro';
    }
}

function loadMovementsValue(){
    const movementListElement = document.getElementById('movement-list');
    if(movementListElement.children.length){
        movementListElement.innerHTML = '';
    }
    
    MovementsCollection.get().then(function(QuerySnapshot){
        QuerySnapshot.forEach(function(doc){
            movements = [];
            var data = doc.data();
            movements.push(data);

            console.log(movements);

            movements.forEach(movement => {
                const movementLiElement = document.createElement('li');
                const movementH4Element = document.createElement('h4');
                const movementH3Element = document.createElement('h3');
                const movementPElement = document.createElement('p');
        
                movementH4Element.innerText = movement.location;
                movementH3Element.innerText = '$ ' + movement.charge.toFixed(2) + ' MXN';
                movementPElement.innerText = 'Realizado el ' + movement.lastChange;
        
                
                movementLiElement.append(movementH4Element, movementH3Element, movementPElement);
                movementListElement.appendChild(movementLiElement);
            });
        })
    }).catch(function(error){
        console.log(error);
    });
}

function onTransfer(){
    const amountInput = document.getElementById('amount');
    const amountValue = amountInput.value;

    if(!amountValue){
        return;
    }

    if(TotalValue > amountValue){
        TotalValue = TotalValue - amountValue;
        loadTotalValue(TotalValue);

        UserCollection.get().then(function(QuerySnapshot){
            QuerySnapshot.forEach(function(doc){
                database.collection('user-info')
                    .doc(doc.id)
                    .update({totalValue: TotalValue});
            })
        }).catch(function(error){
            console.log(error);
        });

        const newMovement = {
            location: 'Transferencia',
            charge: Number(amountValue),
            lastChange: new Date().toLocaleDateString()
        };

        database.collection('movements-data')
            .add(newMovement)
            .then(function(newDoc){
                console.log('Movimiento registrado! ', newDoc)
            }).catch(function(error){
                console.log('Error al agregar movimiento! ',error)
            })

        amountInput.value = '';
        loadMovementsValue();
    }
}

function onSave(){
    const amountInput = document.getElementById("amountSave");
    const SaveSelect = document.querySelector('select[name="saving"]');
    
    const amountValue = amountInput.value;
    const saveValue = SaveSelect.value;

    if(!amountValue){
        return;
    }

    if(TotalValue > amountValue){
        TotalValue = TotalValue - amountValue;
        loadTotalValue(TotalValue);

        UserCollection.get().then(function(QuerySnapshot){
            QuerySnapshot.forEach(function(doc){
                database.collection('user-info')
                    .doc(doc.id)
                    .update({totalValue: TotalValue});
            })
        }).catch(function(error){
            console.log(error);
        });

        const newSaving = {
            type: saveValue,
            value: Number(amountValue),
            lastChange: new Date().toLocaleDateString()
        };
        SavingsValue.map(saving => {
            if(saving.type === newSaving.type){
                saving.value = saving.value + newSaving.value;
            }
        })

        SavingCollection.get().then(function(QuerySnapshot){
            QuerySnapshot.forEach(function(doc){
                var data = doc.data();
                if(data.type === newSaving.type){
                    database.collection('savings-data')
                        .doc(doc.id)
                        .update({ 
                            value: data.value + newSaving.value,
                            lastChange: newSaving.lastChange
                        });
                    loadSavingsValue();
                }
            })
        }).catch(function(error){
            console.log(error);
        });

        amountInput.value = '';
    }
}

window.addEventListener('load', function(event){
    UserCollection.get().then(function(QuerySnapshot){
        QuerySnapshot.forEach(function(doc){
            var data = doc.data();
            TotalValue = data.totalValue;
            loadTotalValue(TotalValue);
            console.log(data);
        })
    }).catch(function(error){
        console.log(error);
    });
    loadTotalValue(TotalValue);
    loadSavingsValue();
    loadMovementsValue();
})

