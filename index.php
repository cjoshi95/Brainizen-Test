<html>
<head>
    <title>
        Brainizen Assignment
    </title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <script
            src="https://code.jquery.com/jquery-3.3.1.min.js"
            integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
            crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    <script type="application/javascript" src="js/canvasjs.min.js"></script>
    <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    <script type="application/javascript" src="js/script.js"></script>
    <style>
        .fullscreen {
            height: 100%;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="jumbotron mt-3">
        <h3>Assignment For Brainizen Web Developer Internship</h3>
        <p>Candidate : Chaitanya Joshi</p>
    </div>
</div>

<div class="container-fluid">
    <div class="row">
        <div class="col-2 m-3 p-3 bg-light fullscreen border-right">
            <button id="dashboard" class="btn btn-primary btn-lg btn-block text-left "><i class="fas fa-users"></i>
                Dashboard
            </button>
        </div>

        <div class="col-9 m-3 p-3">
            <div id="panel">
                <select name="domains" id="domains" class="form-control">
                    <option disabled selected value> -- select an option --</option>
                    <option value="d1">Domain 1</option>
                    <option value="d2">Domain 2</option>
                </select>

                <div class="row">
                    <div class="col-6">
                        <div id="chartContainer" style="height: 370px; width: 100%;"></div>
                    </div>
                    <div class="col-6">
                        <div id="chartContainer1" style="height: 370px; width: 100%;"></div>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-6">
                        <div id="table1div">

                        </div>
                    </div>
                    <div class="col-6">
                        <div id="table2div">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

<script src="https://canvasjs.com/assets/script/jquery.canvasjs.min.js"></script>


</body>
</html>