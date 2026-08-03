<!DOCTYPE html public "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="fa-ir" dir="rtl">
<head>
    <title>اولین سایت سید بتمن!</title>
    <link rel="icon" href="images/IMG_20260318_022357.jpg" type="image/x-icon" />
    <meta charset="UTF-8" />
    <meta name="description" content="سایت پا ساز ساخته شده توسط بتمن گوشامی" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />    
    <meta name="author" content="Ali Cheshami" />
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script src="main.js" type="text/javascript"></script>
    <meta name="keyword" content="سایت پا ساز بتمنعلی" />
    
</head>

<body>
    <header>
    <section>
        <h1 id="h1">
        <small> ساخته شده توسط: </small>
        <br />        
        <strong> علی چشامی </strong>
        </h1>
    </section>
    </header>
    <main>
    <hr />
    <br />
    <br />
    <section>
        <div style="text-align: center; display: flex; align-items: center; justify-content: center; gap: 15px;">
            <img src="images/o.png" alt="icon" width="30" />
            <h2 style="margin: 0; font-size: 28px; font-family: Tahoma, sans-serif;">TIC TAC TOE</h2>
            <img src="images/x.png" alt="icon" width="25" />
        </div>
        <div style="align-items: center;" align="center">
            <table width="80%" height="250" border="10" bordercolor="red" cellspacing="0">
                <tr>
                    <td>
                        <label class="label" onclick="_1()">
                            <span id="1" class="o" >
                                <img src="images/ttt.jpg" width="100%" />
                            </span>
                        </label>
                    </td>
                    <td>
                        <label class="label" onclick="_2()">
                            <span id="2" class="o" >
                                <img src="images/ttt.jpg" width="100%" />
                            </span>
                        </label>
                    </td>
                    <td>
                        <label class="label" onclick="_3()">
                            <span id="3" class="o" >
                                <img src="images/ttt.jpg" width="100%" />
                            </span>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="label" onclick="_4()">
                            <span id="4" class="o" >
                                <img src="images/ttt.jpg" width="100%" />
                            </span>
                        </label>
                    </td>
                    <td>
                        <label class="label" onclick="_5()">
                            <span id="5" class="o" >
                                <img src="images/ttt.jpg" width="100%" />
                            </span>
                        </label>
                    </td>
                    <td>
                        <label class="label" onclick="_6()">
                            <span id="6" class="o">
                                <img src="images/ttt.jpg" width="100%" />
                            </span>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label class="label" onclick="_7()">
                            <span id="7" class="o" >
                                <img src="images/ttt.jpg" width="100%" />
                            </span>
                        </label>
                    </td>
                    <td>
                        <label class="label" onclick="change()">
                            <span id="8" class="o">
                                <img src="images/ttt.jpg" width="100%" />
                            </span>
                        </label>
                    </td>
                    <td><label class="label" onclick="_9()"><span id="9" class="o" ><img src="images/ttt.jpg" width="100%" /></span></label></td>
                </tr>
            </table>
        </div>
    </section>
    <br />
    <br />
    <hr />
    <section>
        <div style="text-align: center; direction: ltr;">
            <br />
            <div style="display: flex; align-items: center; justify-content: center; gap: 15px;">
                <img src="images/1785324981889.png" width="30" alt="Icon" />
                <h2 style="margin: 0; font-size: 28px; font-family: Tahoma, sans-serif;">Money: <span id="pool" id="reset">0</span></h2>
            </div>            
            <br />
            <label>
                <img id="self" src="images/coin.png" width="20%" style="cursor: pointer;" onclick="increasePool()" />
            </label>
            <br />
            <div class="btn-3d">
                <button onclick="resetPool()">Reset</button>
            </div>
        </div>
    </section>
    <hr />
    <br />
    <br />
    <br />
    <section>
    <div>
    <article id="table">
        <table align="center" border="5px" bordercolor="001368" id="info">
        <caption>
        مشخصات بنده (سازنده‌ی سایت)
        </caption>
            <tr>
                <th>نام<br />نام‌خانوادگی</th>
                <td>علی</td>
                <td>چشامی</td>
            </tr>
            <tr>
                <th>شغل</th>
                <td colspan="2">دانش آموز</td>
            </tr>
            <tr>
                <th>شماره موبایل</th>
                <td colspan="2" dir="ltr" title="کپیش نکنی!" oncopy="joon()">+98 993-747-5810</td>
            </tr>
            <tr>
                <th>کد ملی</th>
                <td colspan="2">020-262308-4</td>
            </tr>
            <tr>
                <th>تاریخ تولد</th>
                <td>1392/5/6 هـ.ش</td>
                <td>2013/28/7 م</td>
            </tr>
            <tr>
                <th>وضعیت تأهل<br />تعداد همسر</th>
                <td>خیر</td>
                <td>ندارد</td>
            </tr>
        </table>
    </article>
        <h4 align="center">
            <a href="index.html"> مشخصات کامل </a>
        </h4>
    </div>
    </section>
    <hr />
    <br />
    <article id="song" onclick="pass_song()" class="song">
    <div>
    <audio controls>
        <source src="audio/Herobrine موزیکدل.mp3" type="audio/mp3" />
    </audio>
    <br /><br />
    <audio controls>
        <source src="audio/jafar_goodbye_party.mp3" type="audio/mp3" />
    </audio>
    <br /><br />
    <audio controls>
        <source src="audio/Jafar-Gentleman -musicdel.ir 128.mp3" type="audio/mp3" />
    </audio>
    <br /><br />
    <audio controls>
        <source src="audio/4b7f6edcad76723cbb07c5ed01b57dd319795018-240p.mp3" type="audio/mp3" />
    </audio>
    <br /><br />
    <audio controls>
        <source src="audio/Jafar-Dodakh -musicdel.ir 128 (1).mp3" type="audio/mp3" />
    </audio>
    <br /><br />
    <audio controls>
        <source src="audio/Jafar-Nemiay Naya -musicdel.ir 128.mp3" type="audio/mp3" />
    </audio>
    </div>
    </article>
    <br />
    <hr />
    <br />
    <section>
    <video width="100%" controls>
        <source src="images/VID_20260601_233430.mp4" type="video/mp4" />
    </video>
    </section>
    <br />
    <br />
    <hr />
    <section>
    <p style="text-align: center; border:7px solid #990000;">
        این سایت یک نسخه آزمایشی میباشد و در سر فرصت نسخه کامل ارائه میگردد
    </p>
    </section>
    <hr />
    </main>
    <footer>
        <address id="us">
            E-mail: ali.cheshami0911@gmail.com<br /><br />
            Microsaft accont: ali.cheshami0911@outlook.com
        </address>
    </footer>
</body>

</html>
