#realurl settings
config {
    prefixLocalAnchors = all
    simulateStaticDocuments = 0
    baseURL = /
    tx_realurl_enable = 1
    contentObjectExceptionHandler = 0
}

lib.stdheader.10.setCurrent.htmlSpecialChars = 0

#Ajax Page
contentonly = PAGE
contentonly {
    typeNum = 999
    config.disableAllHeaderCode = 1
    //config.additionalHeaders = Content-type: text/html; charset=utf-8
    config.metaCharset = UTF-8

    10 = COA
    10 < styles.content.get
    10.stdWrap.prepend >// supress feEditAdvanced-firstWrapper - Bug in typo3 4.3.1
}

tt_content.stdWrap.innerWrap.cObject >
tt_content.stdWrap.innerWrap2 >
tt_content.dataWrap >
tt_content.prepend >
tt_content.textpic.20.text.10.10.stdWrap.dataWrap >
tt_content.image.20.imageStdWrap.dataWrap >
tt_content.image.20.imageStdWrapNoWidth.wrap >
tt_content.image.20.imageColumnStdWrap.dataWrap >
tt_content.image.20.layout.default.value = ###IMAGES######TEXT###
tt_content.image.20.layout.1.value < tt_content.image.20.layout.default.value
tt_content.image.20.layout.2.value < tt_content.image.20.layout.default.value
tt_content.image.20.layout.8.value < tt_content.image.20.layout.default.value
tt_content.image.20.layout.9.value < tt_content.image.20.layout.default.value
tt_content.image.20.layout.10.value < tt_content.image.20.layout.default.value
tt_content.image.20.layout.17.value < tt_content.image.20.layout.default.value
tt_content.image.20.layout.18.value < tt_content.image.20.layout.default.value
tt_content.image.20.layout.25.value < tt_content.image.20.layout.default.value
tt_content.image.20.layout.26.value < tt_content.image.20.layout.default.value
tt_content.image.20.rendering.dl.imageRowStdWrap.dataWrap >
tt_content.image.20.rendering.dl.oneImageStdWrap.dataWrap >
tt_content.image.20.rendering.dl.imgTagStdWrap.wrap >
tt_content.image.20.rendering.dl.editIconsStdWrap.wrap >
tt_content.image.20.rendering.dl.caption.wrap >
tt_content.textpic.20.text.10.10.stdWrap.dataWrap >
tt_content.textpic.20.text.wrap >


#Head-Content and Template settings
config.no_cache = 1

page = PAGE
plugin.tx_indexedsearch._DEFAULT_PI_VARS.lang = 0
config.htmlTag_langKey = de
config.metaharset = utf-8
page.meta.description.data = page:description
page.meta.keywords.data = page:keywords
page.meta.viewport = width=device-width, initial-scale=1, maximum-scale=1
page.headerData {
    701 = TEXT
    701.value (

        <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE9">
        <link rel="icon" href="fileadmin/template/img/favicon.png" type="image/x-icon">

    )
}


page.10 = FLUIDTEMPLATE
page.10 {
    file = fileadmin/template/index.html
    variables {
        contentLeft < styles.content.getLeft
        content < styles.content.get
        contentRight < styles.content.getRight
        partialRootPath = fileadmin/Partials
    }
}

[PIDinRootline = 40, 42, 45]
    page.10 = FLUIDTEMPLATE
    page.10 {
        file = fileadmin/template/subpage.html
        variables {
            content < styles.content.get
            partialRootPath = fileadmin/Partials
        }
    }
[GLOBAL]

[PIDinRootline = 60, 64]
    page.10 = FLUIDTEMPLATE
    page.10 {
        file = fileadmin/template/subHeadline.html
        variables {
            contentLeft < styles.content.getLeft
            content < styles.content.get
            #contentRight < styles.content.getRight
            partialRootPath = fileadmin/Partials
        }
    }
[GLOBAL]

#Grid Content Elements
tt_content.gridelements_pi1.20.10.setup {
    1 < lib.gridelements.defaultGridSetup
    1 {
        columns {
            10 < .default
            10.wrap = <div class="heading"><div class="col-xs-12">|</div>
            20 < .default
            20.wrap = <div class="col-xs-3">|</div></div>
            30 < .default
            30.wrap = <div class="info">|</div><button>MEHR</button>
        }
        wrap = <div class="StartItem"><a href="{field:header_link}">|</a></div>
        wrap.insertData = 1
    }

    2 < lib.gridelements.defaultGridSetup
    2 {
        columns {
            10 < .default
            10.wrap = <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">|</div>
            20 < .default
            20.wrap = <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12 contact-center contact-center">|</div>
        }
        wrap = <div class="row contact">|</div>
        wrap.insertData = 1
    }
}

#JS-Dateien einbinden
page.includeJS.file1 = fileadmin/template/dist/js/all.js
page.includeJS.file100 = fileadmin/template/dist/js/custom.js

#T3Dev 24.06.2020 Temporarily set uncompressed js
#page.includeJS.file1 = fileadmin/template/dist/js/uncomressed_all.js

#page.includeJS.file2 = fileadmin/template/js/hyphenate.js
page.includeJS {
    cookieConsentScript = https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.js
    cookieConsentScript.external = 1
    cookieConsentScript.disableCompression = 1
    cookieConsentScript.excludeFromConcatenation = 1
    cookieConsent = fileadmin/template/js/cookieConsent.js
}

#CSS-Dateien einbinden
page.includeCSS {
    fonts = fileadmin/template_v2/Resources/Public/fonts/fonts.css
    screen1 = fileadmin/template/dist/css/main.min.css
    screen1.title = display
    screen1.media = screen
    cookieConentCss = https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.0.3/cookieconsent.min.css
    cookieConentCss.external = 1
    cookieConentCss.disableCompression = 1
    cookieConentCss.excludeFromConcatenation = 1
    100_custom_css = fileadmin/template/dist/css/custom.css
}

plugin.tx_news {
    settings {
        list.paginate {
            itemsPerPage = 10
        }
        orderBy >
        orderBy = datetime
        orderDirection = desc
    }
}

#FooterMenus
lib.footer_unternehmen = COA
lib.footer_unternehmen {
    10 = HMENU
    10 {
        special = directory
        # special.value will contain the page ID of the Footer menu page
        special.value = 3
        1 = TMENU
        1 {
            target = _self
            NO {
                allWrap = <li>|</li>
            }
        }
    }
}

# T3Dev 25.06.2020
/*
lib.stdheader.stdWrap.dataWrap = |
lib.stdheader.10.1.dataWrap = <h1>|</h1>
lib.stdheader.10.2.dataWrap = <h2>|</h2>
lib.stdheader.10.3.dataWrap = <h3>|</h3>
lib.stdheader.10.4.dataWrap = <h4>|</h4>
lib.stdheader.10.5.dataWrap = <h5>|</h5>

lib.stdheader.10.20 < lib.stdheader.10.1
lib.stdheader.10.20 {
    dataWrap = <h1 class="align-left semibold no-transform">|</h1>
}

lib.stdheader.10.30 < lib.stdheader.10.1
lib.stdheader.10.30 {
    dataWrap = <h2 class="align-left light">|</h1>
}
*/

# T3Dev include custim fluid_styled_content 25.06.2020
lib.fluidContent {
    templateName = Default
    templateRootPaths {
        100 = fileadmin/template/fluid_styled_content/Templates/
    }
    partialRootPaths {
        100 = fileadmin/template/fluid_styled_content/Partials/
    }
    layoutRootPaths {
        100 = fileadmin/template/fluid_styled_content/Layouts/
    }
}