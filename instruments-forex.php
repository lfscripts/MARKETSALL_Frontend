<?php include('./include/header.php'); ?>

<!-- Header Slogan -->
<div class="headtitle">
    <div class="headtitle-background headtitle-background-ins-forex">
        <div class="headtitle-content container">
            <div class="row">
                <div class="col">
                    <div class="headtitle-content-icons" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="500">
                        <i class="icons-sprite sprite-headtitle-100 icons-forex"></i>
                    </div>
                    <div class="headtitle-content-slogan">
                        <h3 class="headtitle-content-slogan-desc" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500">INSTITUIONAL LIQUIDITY</h3>
                        <h1 class="headtitle-content-slogan-title" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="0"><strong class="sitecolorblue">FOREX</strong></h1>
                    </div>
                    <div class="headtitle-submenu">
                        <ul class="headsubmenu">
                            <li class="active"><a href="instruments-forex" title="FOREX" rel="category">FOREX</a></li>
                            <li><a href="instruments-indicies" title="INDICES" rel="category">INDICES</a></li>
                            <li><a href="instruments-commodities" title="COMMODITIES" rel="category">COMMODITIES</a></li>
                            <li><a href="instruments-cryptos" title="CRYPTO CURRENCIES" rel="category">CRYPTO CURRENCIES</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-auto">
                    <div class="headtitle-content-partner" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1000">
                        <a class="btn btn-lg btn-info btn-gradient-bluesoft" href="become-a-partner" title="BECOME A PARTNER" rel="bookmark">BECOME A PARTNER</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Header Slogan -->

<!-- Instruments Start -->
<section class="instruments-section">
    <div class="container">

        <!-- Title -->
        <div class="sitetitle sitetitle-xl sitetitle-black sitetitle-center" data-aos="fade-up" data-aos-duration="500">
            <p>Foreign exchange is the world???s most widely traded financial market, with an estimated daily turnover exceeding $6 trillion as of today Marketsall offers liquidity for forex on more than 100 spot instruments with enhanced execution and competitive turnover fees. Take advantage from our broad offer of professional services and get access the our liquidity pool today.</p>
            <p>Our highly experienced FX teams in London and Istanbul will provide you with award winning advisory at every stage of our cooperation.</p>
        </div>
        <!-- Title -->

        <!-- Content Start -->
        <div class="instruments-section-table sitecontent">

            <!-- Title -->
            <div class="sitetitle sitetitle-xl sitetitle-black sitetitle-center" data-aos="fade-up" data-aos-duration="500">
                <h2>FOREX INSTITUTIONAL <strong class="sitecolorblue">SPREADS</strong></h2>
            </div>
            <!-- Title -->

            <!-- Table -->
            <div class="content-horizantaltable" data-aos="fade-down" data-aos-duration="500">
                <div class="instruments-tab-table">
                <table class="sitetable horizantal table">
                        <thead>
                        <tr>
                            <th class="" data-title="INSTRUMENT"><span class="thbox"><span class="thtxt">INSTRUMENT</span></span></th>
                            <th class="" data-title="BID"><span class="thbox"><span class="thtxt">BID</span></span></th>
                            <th class="" data-title="OFFER"><span class="thbox"><span class="thtxt">OFFER</span></span></th>
                            <th class="" data-title="SPREAD"><span class="thbox"><span class="thtxt">SPREAD</span></span></th>
                        </tr>
                        </thead>
                        <tbody>
                            <?php 
                                $json = @file_get_contents('./include/price.json');
                                if($json){
                                    $result = json_decode($json);
                                    if($result->forex){
                                        foreach ($result->forex as $item) {
                                            $spread = floatval($item->ask) - floatval($item->bid);
                                            echo '<tr>';
                                            echo '<td class="" data-title="INSTRUMENT">' . $item->symbol . '</td>';
                                            echo '<td class="" data-title="BID">' . number_format($item->bid, 5, '.', '') . '</td>';
                                            echo '<td class="" data-title="OFFER">' . number_format($item->ask, 5, '.', '') . '</td>';
                                            echo '<td class="" data-title="SPREAD">' . number_format($spread, 5, '.', '') . '</td>';
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
                <a href="instruments-seefull" class="btn btn-lg btn-info" title="SEE FULL LIST" rel="bookmark">SEE FULL LIST</a>
            </div>
            <!-- Table -->

        </div>
        <!-- Content End -->

    </div>
</section>
<!-- Instruments End -->

<!-- Marketsall Technologies Start -->
<section class="foot-technology section-item">
    <div class="container">

        <!-- Title -->
        <div class="sitetitle sitetitle-xl sitetitle-black sitetitle-center sitetitle-mb60" data-aos="fade-up" data-aos-duration="500">
            <h2>TAKE ADVANTAGE OF <strong><span class="sitecolorblue">MARKETS</span>ALL</strong></h2>
        </div>
        <!-- Title -->

        <!-- Technology Box -->
        <ul id="technologyboxowl" class="technology-box owl-carousel owl-theme">
            <li class="technology-box-item" data-aos="fade-right" data-aos-duration="700">
                <div class="technology-box-icons"><i class="icons-sprite sprite-technology-200 icons-norequotes"></i></div>
                <h3 class="technology-box-title">NO REQUOTES</h3>
                <p class="technology-box-desc">Choose how to manage your clients' trades. Market or Instant Execution. For STP brokers, trades are placed with no requotes.</p>
            </li>
            <li class="technology-box-item">
                <div class="technology-box-icons"><i class="icons-sprite sprite-technology-200 icons-speed2"></i></div>
                <h3 class="technology-box-title">ULTRA-FAST EXC</h3>
                <p class="technology-box-desc"> Trades are being placed well under 50ms. For the brokers from Turkey, Sofia servers will be serving so that under 30ms trades can be achivable.</p>
            </li>
            <li class="technology-box-item" data-aos="fade-left" data-aos-duration="700">
                <div class="technology-box-icons"><i class="icons-sprite sprite-technology-200 icons-deep"></i></div>
                <h3 class="technology-box-title">DEEP LIQUIDITY</h3>
                <p class="technology-box-desc">STP & ECN Brokers know that they will get the aggregation of IS Prime & Swissquotes. So the unleashed liquidity will be served.</p>
            </li>
        </ul>
        <!-- Technology Box -->

    </div>
</section>
<!-- Marketsall Technologies End -->

<?php include('./include/footer.php'); ?>