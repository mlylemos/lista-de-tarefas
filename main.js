$(document).ready(function() {
    $('#form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#tarefa-nova').val();
        if (novaTarefa !== '') {
            const novoItem = $('<li></li>').text(novaTarefa);
            $('#lista-tarefas').append(novoItem);
            novoItem.hide().fadeIn(1000);
            $('#tarefa-nova').val('');
        }
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('checked');
    });
});