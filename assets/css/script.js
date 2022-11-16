
function excluir(el) {

    swal({
        title: "Excluir?",
        text: "Você tem certeza??",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            $(el).parent().parent().remove()
            swal({
                title: "cadastro apagado",
                text: "Parabens, voce conseguiu excluir",
                icon: "success",
            })
        } else {
            swal("seus dados não foram excluidos!");
        }
    });
}

$(document).ready(function () {
    var editor;

    ClassicEditor.create(document.querySelector('#editor'))
        .then(newEditor => {
            editor = newEditor;
        })
        .catch(error => {

            console.error(error);
        });

    $("#interagir").click(function () {

        var imagem1 = $("#vanguarda").is(":visible")

        if (imagem1 == true) {

            $("#vanguarda").hide()

        } else {

            $("#vanguarda").show()

        }
    });

    $("#cadastrar").click(function () {
        var nome = $("[placeholder='Nome']").val();
        var dia = $("[placeholder='Tag']").val();
        var tag = $("[placeholder='Game']").val();
        var menssagem = editor.getData();

        var html = "<tr>";
        html += "<td></td>";
        html += "<td>" + nome + "</td>";
        html += "<td>" + dia + "</td>";
        html += "<td>" + tag + "</Ttd>";
        html += "<td>" + menssagem + "</td>"
        html += "<td><a onclick='excluir(this)' href='#'>excluir</a></td>"
        html += "</tr>"

        $("#tabela").append(html)
        $("input").val("");
        editor.setData('');

    });
});