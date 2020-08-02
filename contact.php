
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Contact</title>
    <link rel="icon" type="image/png" href="favicon/192.png">
    <link rel="manifest" href="favicon/manifest.json">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png">
    <meta name="theme-color" content="#ffffff">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>

    <style>
        header {
        position: relative;
        background-color: black;
        height: 75vh;
        min-height: 25rem;
        width: 100%;
        overflow: hidden;
        }

        header video {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;        
        height: auto;
        z-index: 0;
        -ms-transform: translateX(-50%) translateY(-50%);
        -moz-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translateX(-50%) translateY(-50%);
        transform: translateX(-50%) translateY(-50%);
        }

        header .container {
        position: relative;
        z-index: 2;
        }

        header .overlay {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: black;
        opacity: 0.5;
        z-index: 1;
        }

        @media (pointer: coarse) and (hover: none) {
        header {
            background: url('https://source.unsplash.com/XT5OInaElMw/1600x900') black no-repeat center center scroll;
        }
        header video {
            display: none;
        }
        }
        .bubbly-button {
            font-family: "Helvetica", "Arial", sans-serif;
            display: inline-block;
            font-size: 1em;
            padding: 1em 2em;
            margin-top: 30px;
            margin-bottom: 30px;
            -webkit-appearance: none;
            appearance: none;
            background-color: #3182ec;
            color: #fff;
            border-radius: 4px;
            border: none;
            cursor: pointer;
            position: relative;
            transition: transform ease-in 0.1s, box-shadow ease-in 0.25s;
            box-shadow: 0 2px 25px #6ba7f5;
            }
            .bubbly-button:focus {
            outline: 0;
            }
            .bubbly-button:before, .bubbly-button:after {
            position: absolute;
            content: "";
            display: block;
            width: 140%;
            height: 100%;
            left: -20%;
            z-index: -1000;
            transition: all ease-in-out 0.5s;
            background-repeat: no-repeat;
            }
            .bubbly-button:before {
            display: none;
            top: -75%;
            background-image: radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 20%, #ff0081 20%, transparent 30%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%);
            background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
            }
            .bubbly-button:after {
            display: none;
            bottom: -75%;
            background-image: radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, transparent 10%, #ff0081 15%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%), radial-gradient(circle, #ff0081 20%, transparent 20%);
            background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 10% 10%, 20% 20%;
            }
            .bubbly-button:active {
            transform: scale(0.9);
            background-color: #e60074;
            box-shadow: 0 2px 25px rgba(255, 0, 130, 0.2);
            }
            .bubbly-button.animate:before {
            display: block;
            animation: topBubbles ease-in-out 0.75s forwards;
            }
            .bubbly-button.animate:after {
            display: block;
            animation: bottomBubbles ease-in-out 0.75s forwards;
            }

            @keyframes topBubbles {
            0% {
                background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%, 70% 90%;
            }
            50% {
                background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%, 90% 30%;
            }
            100% {
                background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%, 90% 20%;
                background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
            }
            }
            @keyframes bottomBubbles {
            0% {
                background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
            }
            50% {
                background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
            }
            100% {
                background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
                background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
            }
            }
        .display-3 {
            font-size: 2em !important;
        }
    </style>

</head>
<body>
<header>
  <div class="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
    <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4">
  </video>
  <div class="container h-100">
    <div class="d-flex h-100 text-center align-items-center">
      <div class="w-100 text-white">
        <h1 class="display-3">Xabar qoldirganingiz uchun rahmat</h1>
        <p class="lead mb-0">
        <?php
            function split_name($string) {
                $arr = explode(' ', $string);
                $num = count($arr);
                $first_name = $middle_name = $last_name = null;

                if ($num == 2) {
                    list($first_name, $last_name) = $arr;
                } else {
                    list($first_name, $middle_name, $last_name) = $arr;
                }

                return (empty($first_name) || $num > 3) ? false : compact(
                    'first_name', 'middle_name', 'last_name'
                );
            }
            if(isset( $_POST['name']))
            $name = $_POST['name'];
            if(isset( $_POST['tel']))
            $tel = $_POST['tel'];
            if(isset( $_POST['message']))
            $message = $_POST['message'];
            
            ini_set("SMTP", "aspmx.l.google.com");
            ini_set("sendmail_from", "boymurodov.ga");
            $messageMail = "Name: $name \r\n Phone: $tel \r\n Message: $message";
            $headers = "From: boymurdov.ga";
            mail("boymurodovuzcoder@gmail.com", "New Message", $messageMail, $headers);

            
            $servername = "fdb29.atspace.me";
            $username = "3523514_boymurodovga";
            $password = "hC(4P:?(1D[4ebTM";
            $dbname = "3523514_boymurodovga";
            
            $conn = new mysqli($servername, $username, $password, $dbname);
            
            if ($conn->connect_error) {
  				die("Connection failed: " . $conn->connect_error);
				};

			$sql = "INSERT INTO contact_db (NAME, PHONE, MESSAGE) VALUES ('$name', '$tel', '$message')";

			if ($conn->query($sql) === False) {
			  echo "Error: " . $sql . "<br>" . $conn->error;
			}

			$conn->close();
			
            $splitted = split_name($name);
            echo $splitted['first_name'].", tez orada siz bilan bog'lanaman."
            ?>
        </p>
        <button class="bubbly-button" onclick="window.history.back()">Bosh sahifa</button>
      </div>
      
    </div>

    </div>
  </div>
</header>

</body>
</html>

