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

$(document).ready(function(){
    
    $("#cadastro").click(function () {       
        var nome2 = $("#Nome").val();
        var tag2 = $("#Tag").val();
        var classe = $("#Classe").val();
        var game2 = $("#Game").val();
        var hora2 = $("#Hora").val();

        var html2 = "<tr>";
        html2 += "<td></td>";
        html2 += "<td>" + nome2 + "</td>";
        html2 += "<td>" + tag2 + "</td>";
        html2 += "<td>" + classe + "</td>";
        html2 += "<td>" + game2 + "</Ttd>";
        html2 += "<td>" + hora2 + "</td>"
        html2 += "<td><a onclick='excluir(this)' href='#'><i class='fa fa-trash'></a></td>"
        html2 += "</tr>"

        $("#lista").append(html2)
        $("input").val("");
        
    });
});