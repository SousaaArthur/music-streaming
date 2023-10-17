$(function () {
    $("#music-panel").sortable({
        axis: "y",  // Permitir arrastar apenas verticalmente
        update: function (event, ui) {
            // Lógica a ser executada após reorganizar as músicas
            console.log("Ordem atualizada!");
        }
    });

    // Adicione outras lógicas conforme necessário
});
