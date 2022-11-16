
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
    $("#interagir").click(function () {

        var imagem1 = $("#vanguarda").is(":visible")

        if (imagem1 == true) {

            $("#vanguarda").hide()

        } else {

            $("#vanguarda").show()

        }
    });

    $("#cadastrar").click(function () {
        var nome = $("[placeholder='nome']").val();
        var dia = $("[placeholder='dia']").val();
        var tag = $("[placeholder='tag']").val();
        var menssagem = $("[id='editor']").val();


        console.log($("[id='editor']").val())
        var html = "<tr>";
        html += "<td></td>";
        html += "<td>" + nome + "</td>";
        html += "<td>" + dia + "</td>";
        html += "<td>" + tag + "</Ttd>";
        html += "<td>" + menssagem + "</td>"
        html += "<td><a onclick='excluir(this)' href='#'>excluir</a></td>"
        html += "</tr>"


        $("#tabela").append(html)
        $("[placeholder='nome']").val("");
        $("[placeholder='dia']").val("");
        $("[placeholder='tag']").val("");

    });

    ClassicEditor

        .create(document.querySelector('#editor'))
        .catch(error => {
            editor.getData();

            console.log(editor);
            console.error(error);
        });
});