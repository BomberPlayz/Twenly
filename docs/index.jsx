exports.run = (request, response, args, fs) => {

    response.setHeader("Content-type","text/html")
    let fil = typeof args.comp != "undefined" ? args.comp : "none"
    let data = require("fs").existsSync("./Twenly/docs/data/"+fil+".html") ? require("fs").readFileSync("./Twenly/docs/data/"+fil+".html") : false
    response.end(`

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Twenly Docs</title>
    <link rel="stylesheet" href="../main.css">
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="../main.js"></script>
    <link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/styles/default.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.1.0/highlight.min.js"></script>
<!-- Replace the version with any available release. -->
<link href="https://unpkg.com/nord-highlightjs/dist/nord.css" rel="stylesheet" type="text/css" />

<script>hljs.highlightAll();</script>
</head>
<body style="overflow: auto" class="werr ui dark">










    <div class="" style="display: flex; width: available; width: -moz-available;">
        <div class="ui menu vertical compact sticky" style="width: 15%; max-height: 650px">
            <div class="title">
                Twenly docs
            </div>
            <div class="item">
                <div class="ui header">Get Started</div>
                <a class="box hover" href="?comp=get">Use in your website!</a>
            </div>
            <div class="item">
                <div class="ui header">Components</div>
                <a class="box hover take right" href="?comp=buttons">Buttons</a>
                <a class="box hover take right" href="?comp=cards">Cards</a>
                <a class="box hover take right" href="?comp=toast">Toast</a>
                <a class="box hover take right" href="?comp=hormenu">Horizontal Menu</a>
                <a class="box hover take right" href="?comp=vermenu">Vertical Menu</a>
                <a class="box hover take right" href="?comp=message">Message</a>
                <a class="box hover take right" href="?comp=badge">Badge</a>
                <a class="box hover take right" href="?comp=placeholder">Placeholder</a>
                <a class="box hover take right" href="?comp=progressbar">Progress bar</a>
                
            </div>
            <div class="item">
                <div class="ui header">Containers</div>
                <a class="box hover take right" href="?comp=grid">Grid</a>
            </div>
            
            <div class="item">
                <div class="ui header">Others</div>
                <a class="box hover" href="?comp=forms">Forms</a>
            </div>

            <div class="item">
                <div class="ui header">Utility</div>
                <a class="box hover" href="?comp=title">Title class</a>
            </div>
            <div class="item">
                <div class="footer">
                    Docs system made by BomberPlayz
                </div>
            </div>


        </div>

        <div class="ui card" style="width: 85%; height: available  ;">
            <div class="content">
                <div class="header ui">Documentation</div>
            </div>
            <div class="content" style="overflow: auto;">
                ${data ? data : "<h2>No documentation for this!</h2>"}
            </div>
        </div>
    </div>



</body>
</html>



    `)


}
