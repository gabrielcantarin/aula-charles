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
    
    $("#registro").click(function () {       
        var nome3 = $("#Nome3").val();
        var tag3 = $("#Tag3").val();
        var classe3= $("#Classe3").val();
        var game3 = $("#Game3").val();
        var hora3 = $("#Hora3").val();

        var html3 = "<tr>";
        html3 += "<td></td>";
        html3 += "<td>" + nome3 + "</td>";
        html3 += "<td>" + tag3 + "</td>";
        html3 += "<td>" + classe3 + "</td>";
        html3 += "<td>" + game3 + "</Ttd>";
        html3 += "<td>" + hora3 + "</td>"
        html3 += "<td><a onclick='excluir(this)' href='#'><i class='fa fa-trash'></a></td>"
        html3 += "</tr>"

        $("#lista3").append(html3)
        $("input").val("");
        
    });
});