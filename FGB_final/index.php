<!DOCTYPE html>
<html lang="en/ru" prefix="og: http://ogp.me/ns#">
<head>
  <meta charset="UTF-8"/>
<?php
    function get_vk()
    {
        $page = $_GET["page"];
        $pages = ['' => ['images/vk/vk_fgb.jpg', 'ФГБ: Беларусь, Го, искусство, спорт, философия'],
            'main' => ['images/vk/vk_fgb.jpg', 'ФГБ: Беларусь, Го, искусство, спорт, философия'],
            'contacts' => ['images/vk/contacts.jpg', 'ФГБ: Контакты'],
            'ranks' => ['images/vk/ranks.jpg', 'ФГБ: Описание системы рангов'],
            'info-board' => ['images/vk/info-board.jpg', 'ФГБ: Доска информации'],
            'schools' => ['images/vk/schools.jpg', 'ФГБ: Секции'],
            'news' => ['images/vk/news.jpg', 'ФГБ: Архив Новостей'],
            'by-players' => ['images/vk/by-players.jpg', 'ФГБ: Рейтинг лист игроков Беларуси'],
            'tournaments' => ['images/vk/tournaments.jpg', 'ФГБ: Архив соревнований'],
            'players-lib' => ['images/vk/players-lib.jpg', 'ФГБ: Библиотека игроков, педагогов'],
            'go-stories' => ['images/vk/go-stories.jpg', 'ФГБ: Интересные истории'],
            'go-manual' => ['images/vk/go-manual.jpg', 'ФГБ: Справочник по Го'],
            'news-2018-03-23' => ['images/2018_03_23_minsk_cup/01.jpg', 'ФГБ: Кубок Минска 2018 г.'],
            'news-2018-11-30' => ['images/2018_11_30_blr_chp/09.jpg', 'ФГБ: Чемпионат Беларуси 2018 г.'],
            'news-2019-02-16' => ['images/2019_02_16_spb_chine_cup/01.jpg', 'ФГБ: Кубок китайского консула в Санкт-Петерубрге 2019 г.'],
            'news-2019-03-29' => ['images/2019_03_29_minsk_cup/03.jpg', 'ФГБ: Кубок Минска 2019 г.'],
            'news-2019-05-30' => ['images/2019_05_30_world_championship/01.jpg', 'ФГБ: Чемпионат мира 2019 г.'],
            'news-2019-08-30' => ['images/2019_08_30_korea_cup/10.jpg', 'ФГБ: Кубок премьер министра Южной Кореи 2019 г.'],
            'news-2019-09-20' => ['images/2019_09_20_study/01.jpg', 'ФГБ: Belarus Study Open'],
            'news-2019-10-25' => ['images/2019_10_25_autumn/14.jpg', 'ФГБ: Осенний лист'],
            'news-2019-11-23' => ['images/2019_11_23_blr_cp/6.jpg', 'ФГБ: Чемпионат Беларуси 2019 г.'],
            'news-2019-12-20' => ['images/2019_12_20_christmas/001.jpg', 'ФГБ: 9-ый рождественский турнир'],
            'news-2020-01-24' => ['images/2020_01_24/01.jpg', 'ФГБ: Открытый турнир на досках 13х13'],
            'match-belarus-cyprus-2019-10-08' => ['images/vk/match-belarus-cyprus-2019-10-08.jpg', 'ФГБ: Беларусь - Кипр, 1 тур, командный чемпионат Европы 2019/2020 гг.'],
            'match-belarus-iceland-2019-10-29' => ['images/vk/match-belarus-iceland-2019-10-29.jpg', 'ФГБ: Беларусь - Исландия, 2 тур, командный чемпионат Европы 2019/2020 гг.'],
            'match-bulgaria-belarus-2019-11-26' => ['images/vk/match-bulgaria-belarus-2019-11-26.jpg', 'ФГБ: Болгария - Беларусь, 3 тур, командный чемпионат Европы 2019/2020 гг.'],
            'match-spain-belarus-2019-12-17' => ['images/vk/match-spain-belarus-2019-12-17.jpg', 'ФГБ: Испания - Беларусь, 4 тур, командный чемпионат Европы 2019/2020 гг.'],
            'match-belarus-morocco-2020-01-21' => ['images/vk/match-belarus-morocco-2020-01-21.jpg', 'ФГБ: Беларусь - Марокко, 5 тур, командный чемпионат Европы 2019/2020 гг.'],
            'match-belarus-portugal-2020-02-18' => ['images/vk/match-belarus-portugal-2020-02-18.jpg', 'ФГБ: Беларусь - Португалия, 6 тур, командный чемпионат Европы 2019/2020 гг.'],
            'tournament-2018-03-23' => ['images/2018_03_23_minsk_cup/01.jpg', 'ФГБ: Кубок Минска 2018 г.'],
            'tournament-2018-11-30' => ['images/2018_11_30_blr_chp/09.jpg', 'ФГБ: Чемпионат Беларуси 2018 г.'],
            'tournament-2019-02-16' => ['images/2019_02_16_spb_chine_cup/01.jpg', 'ФГБ: Кубок китайского консула в Санкт-Петерубрге 2019 г.'],
            'tournament-2019-03-29' => ['images/2019_03_29_minsk_cup/03.jpg', 'ФГБ: Кубок Минска 2019 г.'],
            'tournament-2019-05-30' => ['images/2019_05_30_world_championship/01.jpg', 'ФГБ: Чемпионат мира 2019 г.'],
            'tournament-2019-08-30' => ['images/2019_08_30_korea_cup/10.jpg', 'ФГБ: Кубок премьер министра Южной Кореи 2019 г.'],
            'tournament-2019-09-20' => ['images/2019_09_20_study/01.jpg', 'ФГБ: Belarus Study Open'],
            'tournament-2019-10-25' => ['images/2019_10_25_autumn/14.jpg', 'ФГБ: Осенний лист'],
            'tournament-2019-11-23' => ['images/2019_11_23_blr_cp/6.jpg', 'ФГБ: Чемпионат Беларуси 2019 г.'],
            'tournament-2019-12-20' => ['images/2019_12_20_christmas/001.jpg', 'ФГБ: 9-ый рождественский турнир'],
            'tournament-2020-01-24' => ['images/2020_01_24/01.jpg', 'ФГБ: Открытый турнир на досках 13х13'],
            'tournament-2020-03-14' => ['images/2020_02_15/01.jpg', 'ФГБ: Кубок Вейчи, 14-15 марта, Китайский культурный центр, г. Минск'],
            'eu-19/20' => ['images/vk/eu-19-20.jpg', 'ФГБ: Командный чемпионат Европы 2019/2020 гг.'],
            'eus' => ['images/vk/eus.jpg', 'ФГБ: Результаты чемпионатов Европы'],
            'wagc' => ['images/vk/wagc.jpg', 'ФГБ: Результаты чемпионатов мира'],
            'o-go-anechaev' => ['images/vk/o-go-anechaev.jpg', 'ФГБ: Алексей Нечаев. "Беседа о Го."'],
            'eef-2018' => ['images/vk/eef-2018.jpg', 'ФГБ: Восточный экономический форум 2018 г.'],
            'japan-60-70' => ['images/vk/japan-60-70.jpg', 'ФГБ: Сюкаку Такагава'],
            'legend' => ['images/vk/legend.jpg', 'ФГБ: Легенды о происхождении игры Го'],
            'neiro' => ['images/vk/neiro.jpg', 'ФГБ: Го и нейропластика'],
            'stone-dragon' => ['images/vk/shool_stone_dragon.jpg', 'ФГБ: школа Го "Каменный дракон"'],
            'vit-go' => ['images/vk/vit_go_akva.jpg', 'ФГБ: Го в Витебске'],
            'malinovka' => ['images/vk/minsk-malinovka.jpg', 'ФГБ: Минск, Малиновка'],
            'brainforce' => ['images/vk/brainforce.jpg', 'ФГБ: Минск, БрейнФорсе']
            ];
        return $pages[$page];
    }
?> 

  <title>Федерация Го Беларуси</title>
  <meta name="description" content="ФГБ — сайт федерации го Беларуси. Все события
  внутри страны и в мире, рассказы о го, книги и видео разборы партий."/>
  <meta name="keywords" content="Беларусь, го, спорт, Китай, искусство, шахматы,
  философия"/>
  <meta name="viewport" content="width=1000, maximum-scale=4, user-scalable=yes"/>
  <link rel="shortcut icon" type="image/x-icon"
        href="images/vk/fgb_icon.jpg"/>

  <meta property="og:url" content="http://фгб.бел"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="<?php echo get_vk()[1]; ?>"/>
  <meta property="vk:image" content="<?php echo get_vk()[0]; ?>"/>
  <meta property="og:image" content="<?php echo get_vk()[0]; ?>"/>
  <meta property="og:description" content="ФГБ — сайт федерации го Беларуси. Все события
  внутри страны и в мире, рассказы о го, книги и видео разборы партий."/>

  <title></title>

  <link rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
        crossorigin="anonymous">
  <link rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css"
        integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp"
        crossorigin="anonymous">
  <link type="text/css" rel="stylesheet/less" href="css/common.less?412152">
  <link type="text/css" rel="stylesheet/less" href="css/colors.less?412512">
  <link type="text/css" rel="stylesheet/less" href="css/tabs_page.less?412512">
  <link type="text/css" rel="stylesheet/less" href="css/chain_blocks.less?412512">
  <link type="text/css" rel="stylesheet/less" href="css/slider.less?415212">
  <link type="text/css" rel="stylesheet/less" href="css/go_board.less?412512">
  <link type="text/css" rel="stylesheet/less" href="css/index.less?415212">
  <link type="text/css" rel="stylesheet/less" href="css/schools.less?415212">
  <link rel="stylesheet" type="text/css" href="carusel/css/style.css?412512"/>
  <link rel="stylesheet" type="text/css" href="carusel/css/elastislide.css?412512"/>

  <script type="text/javascript" src="libs/jquery-3.4.1.min.js"></script>
  <script src='libs/jquery.tmpl.min.js'></script>
  <script type="text/javascript" src="libs/less.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
          integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
          crossorigin="anonymous"></script>
  <script type="text/javascript" src="libs/jssor.slider.min.js"></script>

  <script type="text/JavaScript" src="js/countries.js?415212"></script>
  <script type="text/JavaScript" src="js/index.js?4125122"></script>
  <script type="text/JavaScript" src="js/tabs.js?412512"></script>

  <script type="text/JavaScript" src="js/persons.js?415212"></script>
  <script type="text/JavaScript" src="js/contacts.js?412512"></script>
  <script type="text/JavaScript" src="js/matches.js?412512"></script>
  <script type="text/JavaScript" src="js/news.js?412152"></script>
  <script type="text/JavaScript" src="js/tournaments.js?415212"></script>
  <script type="text/JavaScript" src="js/players.js?412512"></script>
  <script type="text/JavaScript" src="js/results.js?415212"></script>
  <script type="text/JavaScript" src="js/slider.js?412512"></script>
  <script type="text/JavaScript" src="js/go_board2.js?412512"></script>
  <script type="text/JavaScript" src="js/world_data.js?415212"></script>
  <script type="text/JavaScript" src="js/schools.js?41225132"></script>
  <script type="text/JavaScript" src="js/stories.js?451212"></script>
  <script type="text/JavaScript" src="js/visitor_counter.js?412512"></script>
  <script type="text/javascript" src="carusel/js/jquery.easing.1.3.js"></script>
  <script type="text/javascript" src="carusel/js/jquery.elastislide.js"></script>
  <script type="text/javascript" src="carusel/js/gallery.js"></script>

  <script>
      $(document).ready(function () {
          html_in_div("html/menu.html", "#menu_id");
          html_in_div("html/footer.html", "#footer_id");
          
          let searchParams = new URLSearchParams(window.location.search)
          let page = searchParams.get('page');
          if (page == null) {
              page = 'main';
          }
          
          html_in_div(page_map.get(page), "#main_id");
      });
  </script>
</head>

<body>
<div id="body_id">

  <div class="logo_css">
    <div class="logo_left_css"></div>
    <div class="logo_center_css"></div>
    <div class="logo_right_css"></div>
  </div>
  <div id="menu_id">
  </div>

  <div id="main_id">
  </div>

  <div id="footer_id">
  </div>

</div>
</body>