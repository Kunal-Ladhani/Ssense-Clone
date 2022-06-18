let emailpref = () => {
    return `
    <div id="ssidebar">
            <p>Account</p><br>
            <a class="anchor" href="./accounts.html">Account Details</a><br>
            <a class="anchor" href="./emailpreference.html">Email Preferences</a><br>
            <a class="anchor" href="./orderhistory.html">Order History</a><br>
            <a class="anchor" href="./appointments.html">Appointments</a><br>
            <a class="anchor" href="./addresses.html">Addresses</a><br>
            <a class="anchor" id="logout" href="./login.html">Logout</a>
        </div>
        <div id="acchamber">
            <h3 class="acdetail">Email Preferences</h3><br>
            <p>Edit your preferences below</p>
            <h5>Account Information</h5>
            <form id="accountform">
                <label class="label" for="newsletters">Newsletters</label>
                <div id="newsselect">
                    <div class="select"><input type="radio" id="SUB" name="news" value="subscribe">
                        <label class="sel" for="SUB">Subscribe</label>
                    </div>
                    <div class="select"><input type="radio" id="USUB" name="news" value="unsubscribe">
                        <label class="sel" for="USUB">Unsubscribe</label>
                    </div>
                </div>                
                <label class="label" for="info">Sign up for email updates and promotions, tailored to your preferences.</label><br><br>
                <label class="label" for="preference">Preferences</label>
                <div id="prefselect">
                    <div class="select"><input type="radio" id="MEN" name="preference" value="men">
                        <label class="sel" for="MEN">Men</label>
                    </div>
                    <div class="select">
                        <input type="radio" id="WOMEN" name="preference" value="women">
                        <label class="sel" for="WOMEN">Women</label>
                    </div>
                </div><br>
                <label class="label" for="language">Language</label><br>
                <select name="language" id="language">
                    <option value="en"> English </option>
                    <option value="fr"> Français </option>
                    <option value="ja"> 日本語 </option>
                    <option value="zh"> 中文 </option>
                    <option value="ko"> 한국어 </option>
                </select><br><br>
                <label class="label" for="country">Country</label><br>
                <select name="country" id="country">
                    <!---->
                    <option value="in">
                        India
                    </option>
                    <option value="af">
                        Afghanistan
                    </option>
                    <option value="al">
                        Albania
                    </option>
                    <option value="dz">
                        Algeria
                    </option>
                    <option value="as">
                        American Samoa
                    </option>
                    <option value="ad">
                        Andorra
                    </option>
                    <option value="ao">
                        Angola
                    </option>
                    <option value="ai">
                        Anguilla
                    </option>
                    <option value="aq">
                        Antarctica
                    </option>
                    <option value="ag">
                        Antigua And Barbuda
                    </option>
                    <option value="ar">
                        Argentina
                    </option>
                    <option value="am">
                        Armenia
                    </option>
                    <option value="aw">
                        Aruba
                    </option>
                    <option value="au">
                        Australia
                    </option>
                    <option value="at">
                        Austria
                    </option>
                    <option value="az">
                        Azerbaijan
                    </option>
                    <option value="bs">
                        Bahamas
                    </option>
                    <option value="bh">
                        Bahrain
                    </option>
                    <option value="bd">
                        Bangladesh
                    </option>
                    <option value="bb">
                        Barbados
                    </option>
                    <option value="by">
                        Belarus
                    </option>
                    <option value="be">
                        Belgium
                    </option>
                    <option value="bz">
                        Belize
                    </option>
                    <option value="bj">
                        Benin
                    </option>
                    <option value="bm">
                        Bermuda
                    </option>
                    <option value="bt">
                        Bhutan
                    </option>
                    <option value="bo">
                        Bolivia
                    </option>
                    <option value="ba">
                        Bosnia And Herzegowina
                    </option>
                    <option value="bw">
                        Botswana
                    </option>
                    <option value="bv">
                        Bouvet Island
                    </option>
                    <option value="br">
                        Brazil
                    </option>
                    <option value="io">
                        British Indian Ocean Territory
                    </option>
                    <option value="bn">
                        Brunei Darussalam
                    </option>
                    <option value="bg">
                        Bulgaria
                    </option>
                    <option value="bf">
                        Burkina Faso
                    </option>
                    <option value="bi">
                        Burundi
                    </option>
                    <option value="kh">
                        Cambodia
                    </option>
                    <option value="cm">
                        Cameroon
                    </option>
                    <option value="ca">
                        Canada
                    </option>
                    <option value="cv">
                        Cape Verde
                    </option>
                    <option value="ky">
                        Cayman Islands
                    </option>
                    <option value="cf">
                        Central African Republic
                    </option>
                    <option value="td">
                        Chad
                    </option>
                    <option value="cl">
                        Chile
                    </option>
                    <option value="cn">
                        China
                    </option>
                    <option value="cx">
                        Christmas Island
                    </option>
                    <option value="cc">
                        Cocos Islands
                    </option>
                    <option value="co">
                        Colombia
                    </option>
                    <option value="km">
                        Comoros
                    </option>
                    <option value="cg">
                        Congo
                    </option>
                    <option value="ck">
                        Cook Islands
                    </option>
                    <option value="cr">
                        Costa Rica
                    </option>
                    <option value="ci">
                        Cote dIvoire
                    </option>
                    <option value="hr">
                        Croatia
                    </option>
                    <option value="cw">
                        Curacao
                    </option>
                    <option value="cy">
                        Cyprus
                    </option>
                    <option value="cz">
                        Czech Republic
                    </option>
                    <option value="cd">
                        Democratic Republic of the Congo
                    </option>
                    <option value="dk">
                        Denmark
                    </option>
                    <option value="dj">
                        Djibouti
                    </option>
                    <option value="dm">
                        Dominica
                    </option>
                    <option value="do">
                        Dominican Republic
                    </option>
                    <option value="ec">
                        Ecuador
                    </option>
                    <option value="eg">
                        Egypt
                    </option>
                    <option value="sv">
                        El Salvador
                    </option>
                    <option value="gq">
                        Equatorial Guinea
                    </option>
                    <option value="er">
                        Eritrea
                    </option>
                    <option value="ee">
                        Estonia
                    </option>
                    <option value="et">
                        Ethiopia
                    </option>
                    <option value="fk">
                        Falkland Islands
                    </option>
                    <option value="fo">
                        Faroe Islands
                    </option>
                    <option value="fj">
                        Fiji
                    </option>
                    <option value="fi">
                        Finland
                    </option>
                    <option value="fr">
                        France
                    </option>
                    <option value="gf">
                        French Guiana
                    </option>
                    <option value="pf">
                        French Polynesia
                    </option>
                    <option value="tf">
                        French Southern
                    </option>
                    <option value="ga">
                        Gabon
                    </option>
                    <option value="gm">
                        Gambia
                    </option>
                    <option value="ge">
                        Georgia
                    </option>
                    <option value="de">
                        Germany
                    </option>
                    <option value="gh">
                        Ghana
                    </option>
                    <option value="gi">
                        Gibraltar
                    </option>
                    <option value="gr">
                        Greece
                    </option>
                    <option value="gl">
                        Greenland
                    </option>
                    <option value="gd">
                        Grenada
                    </option>
                    <option value="gp">
                        Guadeloupe
                    </option>
                    <option value="gu">
                        Guam
                    </option>
                    <option value="gt">
                        Guatemala
                    </option>
                    <option value="gn">
                        Guinea
                    </option>
                    <option value="gw">
                        Guinea-Bissau
                    </option>
                    <option value="gy">
                        Guyana
                    </option>
                    <option value="ht">
                        Haiti
                    </option>
                    <option value="hm">
                        Heard And Mc Donald
                    </option>
                    <option value="hn">
                        Honduras
                    </option>
                    <option value="hk">
                        Hong Kong SAR
                    </option>
                    <option value="hu">
                        Hungary
                    </option>
                    <option value="is">
                        Iceland
                    </option>
                    <option value="id">
                        Indonesia
                    </option>
                    <option value="iq">
                        Iraq
                    </option>
                    <option value="ie">
                        Ireland
                    </option>
                    <option value="il">
                        Israel
                    </option>
                    <option value="it">
                        Italy
                    </option>
                    <option value="jm">
                        Jamaica
                    </option>
                    <option value="jp">
                        Japan
                    </option>
                    <option value="jo">
                        Jordan
                    </option>
                    <option value="kz">
                        Kazakhstan
                    </option>
                    <option value="ke">
                        Kenya
                    </option>
                    <option value="ki">
                        Kiribati
                    </option>
                    <option value="kw">
                        Kuwait
                    </option>
                    <option value="kg">
                        Kyrgyzstan
                    </option>
                    <option value="la">
                        Lao Peoples Republic
                    </option>
                    <option value="lv">
                        Latvia
                    </option>
                    <option value="lb">
                        Lebanon
                    </option>
                    <option value="ls">
                        Lesotho
                    </option>
                    <option value="lr">
                        Liberia
                    </option>
                    <option value="ly">
                        Libya
                    </option>
                    <option value="li">
                        Liechtenstein
                    </option>
                    <option value="lt">
                        Lithuania
                    </option>
                    <option value="lu">
                        Luxembourg
                    </option>
                    <option value="mo">
                        Macau SAR
                    </option>
                    <option value="mk">
                        Macedonia
                    </option>
                    <option value="mg">
                        Madagascar
                    </option>
                    <option value="mw">
                        Malawi
                    </option>
                    <option value="my">
                        Malaysia
                    </option>
                    <option value="mv">
                        Maldives
                    </option>
                    <option value="ml">
                        Mali
                    </option>
                    <option value="mt">
                        Malta
                    </option>
                    <option value="mh">
                        Marshall Islands
                    </option>
                    <option value="mq">
                        Martinique
                    </option>
                    <option value="mr">
                        Mauritania
                    </option>
                    <option value="mu">
                        Mauritius
                    </option>
                    <option value="yt">
                        Mayotte
                    </option>
                    <option value="mx">
                        Mexico
                    </option>
                    <option value="fm">
                        Micronesia
                    </option>
                    <option value="md">
                        Moldova
                    </option>
                    <option value="mc">
                        Monaco
                    </option>
                    <option value="mn">
                        Mongolia
                    </option>
                    <option value="me">
                        Montenegro
                    </option>
                    <option value="ms">
                        Montserrat
                    </option>
                    <option value="ma">
                        Morocco
                    </option>
                    <option value="mz">
                        Mozambique
                    </option>
                    <option value="mm">
                        Myanmar
                    </option>
                    <option value="na">
                        Namibia
                    </option>
                    <option value="nr">
                        Nauru
                    </option>
                    <option value="np">
                        Nepal
                    </option>
                    <option value="nl">
                        Netherlands
                    </option>
                    <option value="nc">
                        New Caledonia
                    </option>
                    <option value="nz">
                        New Zealand
                    </option>
                    <option value="ni">
                        Nicaragua
                    </option>
                    <option value="ne">
                        Niger
                    </option>
                    <option value="ng">
                        Nigeria
                    </option>
                    <option value="nu">
                        Niue
                    </option>
                    <option value="nf">
                        Norfolk Island
                    </option>
                    <option value="mp">
                        Northern Mariana Islands
                    </option>
                    <option value="no">
                        Norway
                    </option>
                    <option value="om">
                        Oman
                    </option>
                    <option value="pk">
                        Pakistan
                    </option>
                    <option value="pw">
                        Palau
                    </option>
                    <option value="ps">
                        Palestine
                    </option>
                    <option value="pa">
                        Panama
                    </option>
                    <option value="pg">
                        Papua New Guinea
                    </option>
                    <option value="py">
                        Paraguay
                    </option>
                    <option value="pe">
                        Peru
                    </option>
                    <option value="ph">
                        Philippines
                    </option>
                    <option value="pn">
                        Pitcairn
                    </option>
                    <option value="pl">
                        Poland
                    </option>
                    <option value="pt">
                        Portugal
                    </option>
                    <option value="pr">
                        Puerto Rico
                    </option>
                    <option value="qa">
                        Qatar
                    </option>
                    <option value="re">
                        Reunion
                    </option>
                    <option value="ro">
                        Romania
                    </option>
                    <option value="ru">
                        Russia
                    </option>
                    <option value="rw">
                        Rwanda
                    </option>
                    <option value="kn">
                        Saint Kitts And Nevis
                    </option>
                    <option value="lc">
                        Saint Lucia
                    </option>
                    <option value="ws">
                        Samoa
                    </option>
                    <option value="sm">
                        San Marino
                    </option>
                    <option value="st">
                        Sao Tome And Principe
                    </option>
                    <option value="sa">
                        Saudi Arabia
                    </option>
                    <option value="sn">
                        Senegal
                    </option>
                    <option value="rs">
                        Serbia
                    </option>
                    <option value="sc">
                        Seychelles
                    </option>
                    <option value="sl">
                        Sierra Leone
                    </option>
                    <option value="sg">
                        Singapore
                    </option>
                    <option value="sx">
                        Sint Maarten
                    </option>
                    <option value="sk">
                        Slovakia (Slovak Republic)
                    </option>
                    <option value="si">
                        Slovenia
                    </option>
                    <option value="sb">
                        Solomon Islands
                    </option>
                    <option value="so">
                        Somalia
                    </option>
                    <option value="za">
                        South Africa
                    </option>
                    <option value="gs">
                        South Georgia Sandwich
                    </option>
                    <option value="kr">
                        South Korea
                    </option>
                    <option value="es">
                        Spain
                    </option>
                    <option value="lk">
                        Sri Lanka
                    </option>
                    <option value="vc">
                        St-Vincent Grenadines
                    </option>
                    <option value="sh">
                        St. Helena
                    </option>
                    <option value="pm">
                        St. Pierre And Miquelon
                    </option>
                    <option value="sr">
                        Suriname
                    </option>
                    <option value="sj">
                        Svalbard And Jan Mayen
                    </option>
                    <option value="sz">
                        Swaziland
                    </option>
                    <option value="se">
                        Sweden
                    </option>
                    <option value="ch">
                        Switzerland
                    </option>
                    <option value="tw">
                        Taiwan, China
                    </option>
                    <option value="tj">
                        Tajikistan
                    </option>
                    <option value="tz">
                        Tanzania
                    </option>
                    <option value="th">
                        Thailand
                    </option>
                    <option value="tg">
                        Togo
                    </option>
                    <option value="tk">
                        Tokelau
                    </option>
                    <option value="to">
                        Tonga
                    </option>
                    <option value="tt">
                        Trinidad And Tobago
                    </option>
                    <option value="tn">
                        Tunisia
                    </option>
                    <option value="tr">
                        Turkey
                    </option>
                    <option value="tm">
                        Turkmenistan
                    </option>
                    <option value="tc">
                        Turks And Caicos Islands
                    </option>
                    <option value="tv">
                        Tuvalu
                    </option>
                    <option value="ug">
                        Uganda
                    </option>
                    <option value="ua">
                        Ukraine
                    </option>
                    <option value="ae">
                        United Arab Emirates
                    </option>
                    <option value="gb">
                        United Kingdom
                    </option>
                    <option value="us">
                        United States
                    </option>
                    <option value="um">
                        United States Minor Outlying Islands
                    </option>
                    <option value="uy">
                        Uruguay
                    </option>
                    <option value="uz">
                        Uzbekistan
                    </option>
                    <option value="vu">
                        Vanuatu
                    </option>
                    <option value="va">
                        Vatican City State
                    </option>
                    <option value="ve">
                        Venezuela
                    </option>
                    <option value="vn">
                        Viet Nam
                    </option>
                    <option value="vg">
                        Virgin Islands (British)
                    </option>
                    <option value="vi">
                        Virgin Islands (U.S.)
                    </option>
                    <option value="wf">
                        Wallis And Futuna Islands
                    </option>
                    <option value="eh">
                        Western Sahara
                    </option>
                    <option value="ye">
                        Yemen
                    </option>
                    <option value="zm">
                        Zambia
                    </option>
                    <option value="zw">
                        Zimbabwe
                    </option>
                </select><br><br>                
                <label class="label" for="enotification">Email Notifications</label>
                <div id="enotification">
                    <div class="select"><input type="radio" id="EON" name="notification" value="on">
                        <label class="sel" for="EON">On</label>
                    </div>
                    <div class="select"><input type="radio" id="EOFF" name="notification" value="off">
                        <label class="sel" for="EOFF">Off</label></div>
                </div>
                <label class="label" for="info">Sign up for notifications about products in your Wishlist and Shopping Bag.</label><br><br>
                <div id="submitform"><input type="submit" value="SAVE CHANGES" id="submit"></div><br><br>
                <label class="label" for="info">When you create an SSENSE account, we collect your email and personal data to enhance your shopping experience and, subject to your agreement, to provide you with exclusive email updates, promotions, and notifications.</label><br><br>
                <label class="label" for="info">You may unsubscribe at any time.</label><br>
                <label class="label" for="info">To find out more, please visit our Privacy Policy.</label><br>

            </form>
        </div>`;
}

export { emailpref };