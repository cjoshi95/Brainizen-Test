var d1options = {};
var d2options = {};


$(document).ready(function ()
{
    $("#panel").hide();
    $("#domains").on("change", function ()
    {
        let domain = $(this).val();
        document.getElementById("table1div").innerHTML = "";
        document.getElementById("table2div").innerHTML = "";
        loadpie(domain);
        loadbar(domain);
    });

    $(document).on("click","#dashboard",function (e)
    {
        $("#panel").fadeIn(500);
    });
    $(document).on("click", "table tbody tr", function(e) {
        let domain = $(this).attr("id");
        var dom= "";
        if(domain==="d1")
        {
            dom = "Domain 1";
            let table2 = "<h1 class='display-4'>People Under " + dom + "</h1>";
            table2 += "<table class='table'><thead><th>Sr no</th><th>Name</th><th>Domain</th><th>Wishes</th></thead><tbody>";

            for(let i=0;i<d1options.data[0].dataPoints.length;i++)
            {
                table2 += "<tr>";
                table2 += "<td>"+ d1options.data[0].dataPoints[i].srno +"</td>";
                table2 += "<td>"+ d1options.data[0].dataPoints[i].label +"</td>";
                table2 += "<td>"+ dom +"</td>";
                table2 += "<td>"+ d1options.data[0].dataPoints[i].y +"</td>";
                table2 += "</tr>";
            }
            table2 += "</tbody></table>";

            $("#table2div").hide();
            document.getElementById("table2div").innerHTML = table2;
            $("#table2div").fadeIn(500);

        }
        else
        {
            dom = "Domain 2";
            let table2 = "<h1 class='display-4'>People Under " + dom + "</h1>";
            table2 += "<table class='table'><thead><th>Sr no</th><th>Name</th><th>Domain</th><th>Wishes</th></thead><tbody>";

            for(let i=0;i<d2options.data[0].dataPoints.length;i++)
            {
                table2 += "<tr>";
                table2 += "<td>"+ d2options.data[0].dataPoints[i].srno +"</td>";
                table2 += "<td>"+ d2options.data[0].dataPoints[i].label +"</td>";
                table2 += "<td>"+ dom +"</td>";
                table2 += "<td>"+ d2options.data[0].dataPoints[i].y +"</td>";
                table2 += "</tr>";
            }
            table2 += "</tbody></table>";

            $("#table2div").hide();
            document.getElementById("table2div").innerHTML = table2;
            $("#table2div").fadeIn(500);
        }
    });
});



function generateTblOne(srno, y, label, domain)
{
    var d = "";
    if (domain === "d1")
        d = "Domain 1";
    else
        d = "Domain 2";

    let table = "<h1 class='display-4'>" + label + "'s Data</h1>";

    table += "<table class='table' id='" + domain + "'>" +
        "<thead><tr><th>Srno</th><th>Name</th><th>Wishes</th><th>Domain</th></tr></thead><tbody><tr id='" + domain + "'>";

    table += "<td>" + srno + "</td>";
    table += "<td>" + label + "</td>";
    table += "<td>" + y + "</td>";
    table += "<td id='"+ domain +"'>" + d + "</td>";
    table += "</tr></tbody></table>";

    $("#table1div").hide();
    document.getElementById("table1div").innerHTML = table;
    $("#table1div").fadeIn(500);
}


function loadbar(domain)
{
    var options = {};
    if (domain === "d1")
    {
        options = {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Details of People"
            },
            axisY2: {
                lineThickness: 0
            },
            toolTip: {
                shared: true
            },
            legend: {
                verticalAlign: "top",
                horizontalAlign: "center"
            },
            data: [
                {
                    type: "stackedBar",
                    showInLegend: true,
                    name: "Wishes",
                    axisYType: "secondary",
                    color: "#EBB88A",
                    dataPoints: [
                        {srno: 1, y: 5, label: "Prajwal"},
                        {srno: 2, y: 3, label: "Yash"},
                        {srno: 3, y: 1, label: "Vikas"}
                    ],
                    click: function (e)
                    {
                        generateTblOne(e.dataPoint.srno, e.dataPoint.y, e.dataPoint.label, domain);
                    }
                },
                {
                    type: "stackedBar",
                    showInLegend: true,
                    name: "Domains",
                    axisYType: "secondary",
                    color: "#DB9079",
                    indexLabel: "#total",
                    dataPoints: [
                        {srno: 1, y: 2, label: "Prajwal"},
                        {srno: 2, y: 4, label: "Yash"},
                        {srno: 3, y: 3, label: "Vikas"}
                    ],
                    click: function (e)
                    {
                        generateTblOne(e.dataPoint.srno, e.dataPoint.y, e.dataPoint.label, domain);
                    }
                }
            ]
        };
    }
    else
    {
        options = {
            animationEnabled: true,
            theme: "light2",
            title: {
                text: "Details of People"
            },
            axisY2: {
                lineThickness: 0
            },
            toolTip: {
                shared: true
            },
            legend: {
                verticalAlign: "top",
                horizontalAlign: "center"
            },
            data: [
                {
                    type: "stackedBar",
                    showInLegend: true,
                    name: "Wishes",
                    axisYType: "secondary",
                    color: "#EBB88A",
                    dataPoints: [
                        {srno: 4, y: 4, label: "Sanan"},
                        {srno: 5, y: 4, label: "Nilesh"},
                        {srno: 6, y: 2, label: "Tanvir"}
                    ],
                    click: function (e)
                    {
                        generateTblOne(e.dataPoint.srno, e.dataPoint.y, e.dataPoint.label, domain);
                    }
                },
                {
                    type: "stackedBar",
                    showInLegend: true,
                    name: "Domains",
                    axisYType: "secondary",
                    color: "#DB9079",
                    indexLabel: "#total",
                    dataPoints: [
                        {srno: 4, y: 4, label: "Sanan"},
                        {srno: 5, y: 2, label: "Nilesh"},
                        {srno: 6, y: 6, label: "Tanvir"}
                    ],
                    click: function (e)
                    {
                        generateTblOne(e.dataPoint.srno, e.dataPoint.y, e.dataPoint.label, domain);
                    }
                }
            ]
        };

    }
    $("#chartContainer1").CanvasJSChart(options);
}

function loadpie(domain)
{
    if (domain === "d1")
    {
        d1options = {
            title: {
                text: "Pie Chart"
            },
            subtitles: [{
                text: "Data of People"
            }],
            animationEnabled: true,
            data: [{
                type: "pie",
                startAngle: 40,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}",
                dataPoints: [
                    {srno: 1, y: 5, label: "Prajwal"},
                    {srno: 2, y: 3, label: "Yash"},
                    {srno: 3, y: 1, label: "Vikas"}
                ],
                click: function (e)
                {
                    generateTblOne(e.dataPoint.srno, e.dataPoint.y, e.dataPoint.label, domain);
                }
            }]
        };
        $("#chartContainer").CanvasJSChart(d1options);
    }
    else
    {
        d2options = {
            title: {
                text: "Pie Chart"
            },
            subtitles: [{
                text: "Data of People"
            }],
            animationEnabled: true,
            data: [{
                type: "pie",
                startAngle: 40,
                toolTipContent: "<b>{label}</b>: {y}",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}",
                dataPoints: [
                    {srno: 4, y: 3, label: "Sanan"},
                    {srno: 5, y: 2, label: "Nilesh"},
                    {srno: 6, y: 2, label: "Tanvir"}
                ],
                click: function (e)
                {
                    generateTblOne(e.dataPoint.srno, e.dataPoint.y, e.dataPoint.label, domain);
                }
            }]
        };
        $("#chartContainer").CanvasJSChart(d2options);
    }


}