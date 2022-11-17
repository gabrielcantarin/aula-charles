
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
    //cadasto no site
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
        html += "<td><a onclick='excluir(this)' href='#'><i class='fa fa-trash'></a></td>"
        html += "</tr>"

        $("#tabela").append(html)
        $("input").val("");
        editor.setData('');

    });
    //nascente
    $("#cadastro").click(function () {       
        var nome2 = $("#Nome").val();
        var tag2 = $("#Tag").val();
        var game2 = $("#Game").val();
        var hora2 = $("#Hora").val();

        var html2 = "<tr>";
        html2 += "<td></td>";
        html2 += "<td>" + nome2 + "</td>";
        html2 += "<td>" + tag2 + "</td>";
        html2 += "<td>" + game2 + "</Ttd>";
        html2 += "<td>" + hora2 + "</td>"
        html2 += "<td><a onclick='excluir(this)' href='#'><i class='fa fa-trash'></a></td>"
        html2 += "</tr>"

        $("#lista").append(html2)
        $("input").val("");
        
    });
});