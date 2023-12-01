<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>VegetalBite - AI</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">
    <link rel="icon" type="image/x-icon" href="img/icon.png">

    <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Lora:wght@600;700&display=swap" rel="stylesheet"> 

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
</head>
<body>


    <!-- Include Navbar -->
    <?php include 'components/navbar.php'; ?>


    <!-- Page Header Start -->
    <div class="container-fluid page-header wow fadeIn" data-wow-delay="0.1s">
        <div class="container">
            <h1 class="display-3 mb-3 animated slideInDown">AI Soil Identifier and <br>Smart Crop Recommendations</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb mb-0">
                    <li class="breadcrumb-item text-dark active" aria-current="page">AI Soil Identifier</li>
                </ol>
            </nav>
        </div>
    </div>
    <!-- Page Header End -->

    <!-- LEFT FUNCTION -->
    <div class="container-xxl py-6">
        <div class="container">
            <div class="row g-5 justify-content-center">
                <div class="col-lg-5 col-md-12 wow fadeInUp" data-wow-delay="0.1s">
                    <div class="bg-primary text-white d-flex flex-column justify-content-center h-100 p-5">
                        <h5 class="text-white">Soil Type</h5>
                        <select id="select-soil">
                            <option selected="selected" disabled hidden>Select Soil Type</option>
                            <option value="Loam">Loam Soil</option>
                            <option value="Sandy">Sandy Soil</option>
                            <option value="WetClay">Wet Clay Soil</option>
                            <option value="DryClay">Dry Clay Soil</option>
                        </select>
                        <h5 class="text-white">Planting Location</h5>
                        <select id="select-city">
                            <option selected="selected" disabled hidden>Select City or Plant at Home</option>
                            <option value="Home">Plant at Home</option>
                            <option value="Baguio">Baguio City</option>
                            <option value="MM">Metro Manila</option>
                            <option value="Caloocan">Caloocan City</option>
                        </select>
                        <button id="get-location" class="btn btn-primary rounded-pill py-3 px-5" style="border: 2px solid black !important; background-color: yellowgreen; width: 280px; align-self: center; font-size: 14px; margin-top: 20px;">Get Location Automatically</button>
                        <button id="clear-location" class="btn btn-primary rounded-pill py-3 px-5" style="border: 2px solid black !important; background-color: yellowgreen; width: 280px; align-self: center; font-size: 14px; margin-top: 20px;">Clear Location</button>   
                        <div id="location-details"></div>
                        <h5 class="text-white">Planting Date</h5>
                        <select id="select-month">
                            <option selected="selected" disabled hidden>Select month to start planting</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                        
                        
                        <div class="d-flex pt-2">
                            <button id="getresult" class="btn btn-primary rounded-pill py-3 px-5" style="border: 2px solid black !important; background-color: yellowgreen; width: 280px; align-self: center; font-size: 14px; margin-top: 20px;">Get Crop Recommendation</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-7 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <img id="imagePreview" style="height: 300px; width: 300px; border: 2px solid black; background: url(img/noimg.jpg)">
                                    <input id="imageUpload" type="file" />      
                                    <div id="recognition-label"></div>    
                                    <button id="clear-image-and-select" class="btn btn-primary rounded-pill py-3 px-5" style="margin-top: 4rem;">Clear Image</button>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-floating">
                                    <div id="webcam-container" style="height: 300px; width: 300px; border: 2px solid black; background: url(img/noimg.jpg)"></div>
                                    <div id="webcam-prediction-label" style="font-size: 14px; height: 5px;"></div>
                                    <button onclick="init()" class="btn btn-primary rounded-pill py-3 px-5" id="btncamera" style="margin-top: 5.5rem;">Start Webcam</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <!-- LEFT FUNCTION -->

    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-0 gx-5 align-items-end">
                <div class="col-lg-6">
                    <div class="section-header text-start mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 500px;">
                        <h1 class="display-5 mb-3">Smart Crop Recommendations</h1>
                        <h1 id="result"></h1>
                    </div>
                </div>
               
            </div>
            <div class="tab-content">
                <div id="tab-1" class="tab-pane fade show p-0 active">
                    <div class="row g-4">
                        
                        <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" id="tomatoContainer" style="display: none;">
                            <div class="product-item">
                              <div class="position-relative bg-light overflow-hidden">
                                <img class="img-fluid w-100" src="img/vegetables/tomato/tomato (6).jpg" alt="">
                                <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                              </div>
                              <div class="text-center p-4">
                                <a class="d-block h5 mb-2" href="">Tomato</a>
                              </div>
                              <div class="d-flex border-top">
                                <small class="w-50 text-center border-end py-2">
                                  <a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</a>
                                </small>
                                <small class="w-50 text-center py-2">
                                  <h6>Kamatis</h6>
                                </small>
                              </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s" id="ampalayaContainer" style="display: none;">
                            <div class="product-item">
                              <div class="position-relative bg-light overflow-hidden">
                                <img class="img-fluid w-100" src="img/vegetables/ampalaya/ampalaya (3).jpg" alt="">
                                <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                              </div>
                              <div class="text-center p-4">
                                <a class="d-block h5 mb-2" href="">BitterGourd</a>
                              </div>
                              <div class="d-flex border-top">
                                <small class="w-50 text-center border-end py-2">
                                  <a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</a>
                                </small>
                                <small class="w-50 text-center py-2">
                                  <h6>Ampalaya</h6>
                                </small>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>

    <!-- AI logics Javascript -->
    <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.3.1/dist/tf.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>

    <script src="aiscripts/imgupload.js"></script>
    <script src="aiscripts/imgwebcam.js"></script>
    <script src="aiscripts/result.js"></script>
    <script src="aiscripts/getlocation.js"></script>


</body>
</html>