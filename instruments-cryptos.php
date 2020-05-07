<?php include('./include/header.php'); ?>

<!-- Header Slogan -->
<div class="headtitle">
    <div class="headtitle-background headtitle-background-ins-forex">
        <div class="headtitle-content">
            <div class="headtitle-content-slogan">
                <h3 class="headtitle-content-slogan-desc">INSTITUIONAL LIQUIDITY</h3>
                <h1 class="headtitle-content-slogan-title"><strong class="sitecolorred">CRYPTO CURRENCIES</strong></h1>
            </div>
        </div>
    </div>
    <div class="headtitle-icons">
        <i class="icons-sprite sprite-headtitle-100 icons-crypto"></i>
    </div>
</div>
<!-- Header Slogan -->

<!-- Instruments Start -->
<section class="instruments-section">
    <div class="container">

        <!-- Title -->
        <div class="sitetitle sitetitle-xl sitetitle-black sitetitle-center sitetitle-width800" data-aos="fade-up" data-aos-duration="500">
            <p>Get the cryptocurrency liquidity and benefit from low <br />commissions and trading volumes. Allow your client to participate in the <br />fastest growing financial market on our award-winning platform.</p>
            <p>To provide high liquidity we established connections to the top cryptocurrency exchanges. <br />Check our offer and get access to our optimized feeds, spreads and the best executions on the market.</p>
        </div>
        <!-- Title -->

        <!-- Content Start -->
        <div class="instruments-section-table sitecontent">

            <!-- Title -->
            <div class="sitetitle sitetitle-xl sitetitle-black sitetitle-center" data-aos="fade-up" data-aos-duration="500">
                <h2>CRYPTO CURRENCIES INSTITUTIONAL <strong class="sitecolorred">SPREADS</strong></h2>
            </div>
            <!-- Title -->

            <!-- Table -->
            <div class="content-horizantaltable" data-aos="fade-down" data-aos-duration="500">
                <div class="instruments-tab-table">
                    <table class="sitetable horizantal table">
                        <thead>
                        <tr>
                            <th class="" data-title="INSTRUMENT"><span class="thbox"><span class="thtxt">INSTRUMENT</span></span></th>
                            <th class="" data-title="PRICE"><span class="thbox"><span class="thtxt">PRICE</span></span></th>
                        </tr>
                        </thead>
                        <tbody>
                            <?php 
                                $json = @file_get_contents('./include/price.json');
                                if($json){
                                    $result = json_decode($json);
                                    if($result->crypto){
                                        foreach ($result->crypto as $item) {
                                            echo '<tr>';
                                            echo '<td class="" data-title="INSTRUMENT">' . $item->symbol . '</td>';
                                            echo '<td class="" data-title="PRICE">' . number_format($item->price, 8, '.', '') . '</td>';
                                            echo '</tr>';
                                        }
                                    }
                                }
                            ?>                        
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="content-horizantaltable-bottombtn" data-aos="fade-down" data-aos-duration="500">
                <a href="instruments-seefull" class="btn btn-lg btn-gradient-red" title="SEE FULL LIST" rel="bookmark">SEE FULL LIST</a>
            </div>
            <!-- Table -->

        </div>
        <!-- Content End -->

    </div>
</section>
<!-- Instruments End -->

<!-- Other Instruments Start -->
<section class="section-item foot-item foot-item-bggray">
    <div class="container">

        <!-- Title -->
        <div class="sitetitle sitetitle-xl sitetitle-black sitetitle-center sitetitle-mb40" data-aos="fade-up" data-aos-duration="500">
            <h2>OTHER <strong class="sitecolorred">INSTRUMENTS</strong></h2>
        </div>
        <!-- Title -->

        <!-- Instruments Box -->
        <ul id="instrumentsboxowl" class="instruments-box owl-carousel owl-theme">
            <li class="instruments-box-item" data-aos="fade-right" data-aos-duration="700">
                <div class="instruments-box-icons"><i class="icons-sprite sprite-red-instruments-45 icons-indicies"></i></div>
                <h3 class="instruments-box-title">INDICIES</h3>
                <p class="instruments-box-desc">Future and cash indices at the same time. Also you can offer your clients the e-mini contracts.</p>
                <div class="instruments-box-item-btn">
                    <a class="btn btn-lg btn-danger btn-gradient-red" href="instruments-indicies" title="MORE INFORMATION" rel="bookmark">MORE INFORMATION</a>
                </div>
            </li>
            <li class="instruments-box-item">
                <div class="instruments-box-icons"><i class="icons-sprite sprite-red-instruments-45 icons-commodities"></i></div>
                <h3 class="instruments-box-title">COMMODITIES</h3>
                <p class="instruments-box-desc">Agriculture goos, energy contracts and precious metals. All and more in Etrade Technology.</p>
                <div class="instruments-box-item-btn">
                    <a class="btn btn-lg btn-danger btn-gradient-red" href="instruments-commodities" title="MORE INFORMATION" rel="bookmark">MORE INFORMATION</a>
                </div>
            </li>
            <li class="instruments-box-item" data-aos="fade-left" data-aos-duration="700">
                <div class="instruments-box-icons"><i class="icons-sprite sprite-red-instruments-45 icons-forex"></i></div>
                <h3 class="instruments-box-title">FOREX</h3>
                <p class="instruments-box-desc">Over 100 of spot FX products. Top-of-the book liquidity with the help of 8 different liquidity banks.</p>
                <div class="instruments-box-item-btn">
                    <a class="btn btn-lg btn-danger btn-gradient-red" href="instruments-forex" title="MORE INFORMATION" rel="bookmark">MORE INFORMATION</a>
                </div>
            </li>
        </ul>
        <!-- Instruments Box -->

    </div>
</section>
<!-- Other Instruments End -->

<?php include('./include/footer-technologies.php'); ?>

<?php include('./include/footer.php'); ?>