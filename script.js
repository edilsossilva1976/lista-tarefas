$('document').ready(()=>{


    $('form').on('submit', (e)=>{
        e.preventDefault();

        const line = $('ul');
        const newTask = $('#nomeTarefa').val();

        if($('#nomeTarefa').val().length == 0){
            alert("preencha o campo com a sua tarefa!!!");
            
        }else{
            const taskComplete = $().click(()=>{
                let taskReady = document.getElementById("check");
            })

            let id=0;

            const newLine = $('<li class="tarefa"></li>');

            const btnCheck = $('<img src="./img/checkin.jpg.jfif" id="check">').appendTo(newLine);
            const linha = $(`<p> ${newTask}</p>`).appendTo(newLine);
            const btnTrash = $('<img src="./img/trash.jpg.jfif" id="trash">').appendTo(newLine);        
            $(newLine).appendTo('ul');

            $(':input').val('');


            //clicar no check
            const check = $(btnCheck).click(()=>{
                $(linha).remove();
                $(btnCheck).appendTo(newLine);
                $(`<p style = "text-decoration:line-through"> ${newTask}</p>`).appendTo(newLine);
                $(btnTrash).appendTo(newLine);
            })
                        
            //clicar na lixeira
            const trash = $(btnTrash).click(()=>{
                $(newLine).remove();
            })

        }
    })
})

