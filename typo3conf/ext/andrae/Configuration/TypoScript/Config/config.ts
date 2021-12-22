###################################################
# Config
###################################################

config {

	## Setting up the language variable "L" to be passed along with links
	linkVars = L(0-1)

	## Allow link to login page
	#typolinkLinkAccessRestrictedPages = {$loginPid}

	## Enable RealURL
	tx_realurl_enable = 1
	defaultGetVars {
		L = 0
	}

	## language
	htmlTag_langKey = de
	htmlTag_dir = ltr
	language = de
	locale_all = de_DE.utf8
	sys_language_uid = 0
	## How to handle localization
	sys_language_mode = content_fallback
	## Records that are not localized will be hidden. Possible value hideNonTranslated | int (the sys_language)
	## Optionen für sys_language_overlay: 1 => Ausgabe in Standardsprache; hideNonTranslated => keine Ausgabe
	sys_language_overlay = hideNonTranslated
	#1
	#hideNonTranslated

	## MAIL SPAM PROTECT

	spamProtectEmailAddresses = 0

}

