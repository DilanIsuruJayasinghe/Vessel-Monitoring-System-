<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Vessal Monitoring System</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBJx32_DH6K0Q8CpJRnVn5nZURK4x3BvT4&callback=initMap&libraries=&v=weekly"
      defer
    ></script>
    <title>Firebase - VMSystem</title>
  </head>
  <body>
  <nav class="navbar navbar-dark bg-dark">
  <div class="container-fluid">
    <span class="navbar-brand mb-1">Vessal Monitoring System</span>
    <form class="d-flex">
      <!-- <input class="form-control me-3" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-light" type="submit">Search</button> -->
    </form>
  </div>
</nav>
      <div class="py-4">

<style>
#loginerror{
    text-align: center;
    display: none;
}

</style>
    <div class="page-conteiner">
        <div class="row justify-content-center">
            <div class="col-md-4 mt-5">
                <div class="card">
                    <div class="card-header text-center">
                        <h4>login</h4>
                    </div>
                    <div class="card-body">
                        <form class="row justify-content-center" id="login">
                            <div class="alert alert-danger col-md-10" role="alert" id="loginerror">
                                Username or Password is Incorrect!
                            </div>
                            <div class="form-group mb-4 col-md-10">
                                <label for="">User name</label>
                                <input type="text" name="username" class="form-control" id="username" required placeholder="Enter username">
                            </div>

                            <div class="form-group mb-4 col-md-10">
                                <label for="">Password</label>
                                <input type="password" name="password" class="form-control" id="password" required placeholder="Enter password">
                            </div>

                            <div class="form-group mb-3 text-center">
                                <button type="reset" name="reset" class="btn btn-secondary" id="reset" onclick="resetLoginError()">Reset</button>
                                <button type="submit" name="submit" class="btn btn-success" id="submit">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://www.gstatic.com/firebasejs/4.3.0/firebase.js"></script>
    <script src="includes/js/Main.js"></script>
<?php
include('includes/php/footer.php');
?> 
<script type = "text/javascript" >  
    function preventBack() { window.history.forward(); }  
    setTimeout("preventBack()", 0);  
    window.onunload = function () { null };  
</script> 