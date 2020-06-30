<?php
namespace Ws\Wsnews\Command;

use Ws\Wsnews\Command\AbstractCommandController;
use GeorgRinger\News\Domain\Repository\NewsDefaultRepository;
use TYPO3\CMS\Core\Utility\DebugUtility;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\PathUtility;

use TYPO3\CMS\Extbase\Configuration\BackendConfigurationManager;
use TYPO3\CMS\Extbase\Mvc\Controller\CommandController;

/**
 *
 * Base class for Certification Class
 *
 */
class ImportCommandController extends AbstractCommandController
{

    /**
     * @var \GeorgRinger\News\Domain\Repository\NewsDefaultRepository $itemRepository
     */
    protected $itemRepository;

    /**
     * @var \TYPO3\CMS\Scheduler\Scheduler
     */
    protected $scheduler;

    protected $count = 0;
    protected $added = 0;
    protected $updated = 0;

    /**
     * command importNewsFromXmlCommand
     *
     * @return void
     */
    public function importNewsFromXmlCommand()
    {
        $config = $this->getConfiguration();
        $urlPath = $config['urlPath'];

        $objectManager  = GeneralUtility::makeInstance( 'TYPO3\CMS\Extbase\Object\ObjectManager' );
        $dirtyImporter = new DirtyImporter;

        $this->itemRepository = $objectManager->get(NewsDefaultRepository::class);
        $itemFile = $this->getFile($urlPath);

        // XML in Array wandeln
        $xmlArr = $this->xml2array($itemFile);

        //\TYPO3\CMS\Core\Utility\DebugUtility::debug($xmlArr);
    }

    /**
     * function getFile
     * fetches one XML via CURL
     *
     * @param string $url
     *
     * @return string mixed
     */
    protected function getFile( $url ) {
        $ch      = curl_init();
        $timeout = 5;
        curl_setopt( $ch, CURLOPT_URL, $url );
        curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1 );
        curl_setopt( $ch, CURLOPT_CONNECTTIMEOUT, $timeout );
        $data = curl_exec( $ch );
        curl_close( $ch );

        return $data;
    }

    /**
     * function getItems
     * Finds all //item Elements in XML and Returns Domain/Model/Items
     *
     * @param \SimpleXMLElement $xml
     *
     * @return array
     */
    protected function getItems (\SimpleXMLElement $xml ) {
        $return = [];
        $items  = $xml->xpath( 'content\artikel' );

        foreach ( $items as $singleItem ) {
            echo "<pre>";
            print_r($singleItem);
            echo "</pre>############################################<br />";

        }

        return $return;
    }

    /**
     * function buildItem
     * Uses a single $xml Part and creates Item out of it.
     *
     * @param \SimpleXMLElement $xml
     * @param \Websolutions\Wsvacancy\Domain\Model\Item $item
     *
     * @return Item
     */
    protected function buildItem( \SimpleXMLElement $xml , \GeorgRinger\News\Domain\Model\News $item = NULL) {
        if(!isset($item))
        {
            $item = new \GeorgRinger\News\Domain\Model\News();
        }
        $date = new \DateTime( $this->getProperty( $xml, 'pubDate' ) );
        $item->setDatetime( $date );
        $item->setPid(12);
        $item->setCruserId(5);
        $item->setTitle($this->getProperty($xml, 'titel'));
        $item->setGuid( $this->getProperty( $xml, 'guid' ) );
        $item->setKennziffer( $this->getProperty( $xml, 'heroes:kennziffer' ) );
        $item->setLink( $this->getProperty( $xml, 'link' ) );
        $item->setDescription( $this->getProperty( $xml, 'description' ) );
        $item->setPositionanzeige( $this->getProperty( $xml, 'heroes:positionanzeige' ) );
        $item->setGeschaeftsbereich( $this->getProperty( $xml, 'heroes:geschaeftsbereich' ) );
        $item->setGeschaeftsbereichKey( $this->getProperty( $xml, 'heroes:geschaeftsbereichKey' ) );
        $item->setGesellschaft( $this->getProperty( $xml, 'heroes:gesellschaft' ) );
        $item->setInfotext( $this->getProperty( $xml, 'heroes:infotext' ) );
        $item->setAufgaben( $this->getProperty( $xml, 'heroes:aufgaben' ) );
        $item->setZusatzinfo1( $this->getProperty( $xml, 'heroes:zusatzinfo1' ) );
        $item->setZusatzinfo2( $this->getProperty( $xml, 'heroes:zusatzinfo2' ) );
        $item->setZusatzinfo3( $this->getProperty( $xml, 'heroes:zusatzinfo3' ) );
        $item->setQualifikationen( $this->getProperty( $xml, 'heroes:qualifikationen' ) );
        $item->setFormattedAufgaben( $this->getProperty( $xml, 'heroes:formattedAufgaben' ) );
        $item->setFormattedQualifikationen( $this->getProperty( $xml, 'heroes:formattedQualifikationen' ) );
        $item->setFormattedZusatzinfo1( $this->getProperty( $xml, 'heroes:formattedZusatzinfo1' ) );
        $item->setFormattedZusatzinfo2($this->getProperty($xml, 'heroes:formattedZusatzinfo2'));
        $item->setFormattedZusatzinfo3( $this->getProperty( $xml, 'heroes:formattedZusatzinfo3' ) );
        $item->setBeschaeftigungsart( $this->getProperty( $xml, 'heroes:beschaeftigungsart' ) );
        $item->setBeschaeftigungsartKey( $this->getProperty( $xml, 'heroes:beschaeftigungsartKey' ) );
        $item->setAufgabenbereich( $this->getProperty( $xml, 'heroes:aufgabenbereich' ) );
        $item->setZuBesetzenAb( $this->getProperty( $xml, 'heroes:zuBesetzenAb' ) );
        $item->setEinsatzortSummary( $this->getProperty( $xml, 'heroes:einsatzortSummary' ) );
        $item->setEinsatzort( $this->getProperty( $xml, 'heroes:einsatzort' ) );
        $item->setAdresse( $this->getProperty( $xml, 'heroes:adresse' ) );
        $item->setPostleitzahl( $this->getProperty( $xml, 'heroes:postleitzahl' ) );
        $item->setLand( $this->getProperty( $xml, 'heroes:land' ) );
        $item->setAnspraushangname( $this->getProperty( $xml, 'heroes:anspraushangname' ) );
        $item->setWideDescription( $this->getProperty( $xml, 'heroes:wideDescription' ) );
        $item->setHtmlStellenAnsichtLink( $this->getProperty( $xml, 'heroes:htmlStellenAnsichtLink' ) );
        $item->setPid( $this->targetPid );

        return $item;
    }

    /**
     * function getProperty
     * Gets Single Content from XML named $title. As XML if $string == false
     *
     * @param \SimpleXMLElement $xml
     * @param string $title
     * @param bool $string
     *
     * @return string
     */
    protected function getProperty( \SimpleXMLElement $xml, $title, $string = true ) {
        $tmp = $xml->xpath( './' . $title );
        if ( count( $tmp ) > 0 ) {
            if ( $string ) {
                return html_entity_decode($tmp[0]->__toString());
            } else {
                return $tmp[0]->asXML();
            }

        }

        return '';
    }

    /**
     * function deleteOldItems
     * Deletes all Items on current Page that is not new imported yet
     *
     * @param $currentItems
     *
     * @return void
     */
    protected function deleteOldItems( $currentItems ) {
        $tmp = array();
        /**
         * @var \Websolutions\Wsvacancy\Domain\Model\Item $item
         */
        foreach ( $currentItems as $item ) {
            $tmp[] = $item->getKennziffer();
        }
        /**
         * @var \TYPO3\CMS\Core\Database\DatabaseConnection $db
         */
        $db    = $GLOBALS['TYPO3_DB'];
        $query = 'DELETE FROM tx_wsvacancy_domain_model_item WHERE pid=' . $this->targetPid . ' AND kennziffer NOT IN (' . implode( ',', $tmp ) . ');';
        $db->sql_query( $query );
    }


    /**
     * xml2array() will convert the given XML text to an array in the XML structure.
     * Link: http://www.bin-co.com/php/scripts/xml2array/
     * Arguments : $contents - The XML text
     *                $get_attributes - 1 or 0. If this is 1 the function will get the attributes as well as the tag values - this results in a different array structure in the return value.
     *                $priority - Can be 'tag' or 'attribute'. This will change the way the resulting array sturcture. For 'tag', the tags are given more importance.
     * Return: The parsed XML in an array form. Use print_r() to see the resulting array structure.
     * Examples: $array =  xml2array(file_get_contents('feed.xml'));
     *              $array =  xml2array(file_get_contents('feed.xml', 1, 'attribute'));
     */
    public function xml2array($contents, $get_attributes=1, $priority = 'tag') {
        if(!$contents) return array();

        if(!function_exists('xml_parser_create')) {
            //print "'xml_parser_create()' function not found!";
            return array();
        }

        //Get the XML parser of PHP - PHP must have this module for the parser to work
        $parser = xml_parser_create('');
        xml_parser_set_option($parser, XML_OPTION_TARGET_ENCODING, "UTF-8"); # http://minutillo.com/steve/weblog/2004/6/17/php-xml-and-character-encodings-a-tale-of-sadness-rage-and-data-loss
        xml_parser_set_option($parser, XML_OPTION_CASE_FOLDING, 0);
        xml_parser_set_option($parser, XML_OPTION_SKIP_WHITE, 1);
        xml_parse_into_struct($parser, trim($contents), $xml_values);
        xml_parser_free($parser);

        if(!$xml_values) return;//Hmm...

        //Initializations
        $xml_array = array();
        $parents = array();
        $opened_tags = array();
        $arr = array();

        $current = &$xml_array; //Refference

        //Go through the tags.
        $repeated_tag_index = array();//Multiple tags with same name will be turned into an array
        foreach($xml_values as $data) {
            unset($attributes,$value);//Remove existing values, or there will be trouble

            //This command will extract these variables into the foreach scope
            // tag(string), type(string), level(int), attributes(array).
            extract($data);//We could use the array by itself, but this cooler.

            $result = array();
            $attributes_data = array();

            if(isset($value)) {
                if($priority == 'tag') $result = $value;
                else $result['value'] = $value; //Put the value in a assoc array if we are in the 'Attribute' mode
            }

            //Set the attributes too.
            if(isset($attributes) and $get_attributes) {
                foreach($attributes as $attr => $val) {
                    if($priority == 'tag') $attributes_data[$attr] = $val;
                    else $result['attr'][$attr] = $val; //Set all the attributes in a array called 'attr'
                }
            }

            //See tag status and do the needed.
            if($type == "open") {//The starting of the tag '<tag>'
                $parent[$level-1] = &$current;
                if(!is_array($current) or (!in_array($tag, array_keys($current)))) { //Insert New tag
                    $current[$tag] = $result;
                    if($attributes_data) $current[$tag. '_attr'] = $attributes_data;
                    $repeated_tag_index[$tag.'_'.$level] = 1;

                    $current = &$current[$tag];

                } else { //There was another element with the same tag name

                    if(isset($current[$tag][0])) {//If there is a 0th element it is already an array
                        $current[$tag][$repeated_tag_index[$tag.'_'.$level]] = $result;
                        $repeated_tag_index[$tag.'_'.$level]++;
                    } else {//This section will make the value an array if multiple tags with the same name appear together
                        $current[$tag] = array($current[$tag],$result);//This will combine the existing item and the new item together to make an array
                        $repeated_tag_index[$tag.'_'.$level] = 2;

                        if(isset($current[$tag.'_attr'])) { //The attribute of the last(0th) tag must be moved as well
                            $current[$tag]['0_attr'] = $current[$tag.'_attr'];
                            unset($current[$tag.'_attr']);
                        }

                    }
                    $last_item_index = $repeated_tag_index[$tag.'_'.$level]-1;
                    $current = &$current[$tag][$last_item_index];
                }

            } elseif($type == "complete") { //Tags that ends in 1 line '<tag />'
                //See if the key is already taken.
                if(!isset($current[$tag])) { //New Key
                    $current[$tag] = $result;
                    $repeated_tag_index[$tag.'_'.$level] = 1;
                    if($priority == 'tag' and $attributes_data) $current[$tag. '_attr'] = $attributes_data;

                } else { //If taken, put all things inside a list(array)
                    if(isset($current[$tag][0]) and is_array($current[$tag])) {//If it is already an array...

                        // ...push the new element into that array.
                        $current[$tag][$repeated_tag_index[$tag.'_'.$level]] = $result;

                        if($priority == 'tag' and $get_attributes and $attributes_data) {
                            $current[$tag][$repeated_tag_index[$tag.'_'.$level] . '_attr'] = $attributes_data;
                        }
                        $repeated_tag_index[$tag.'_'.$level]++;

                    } else { //If it is not an array...
                        $current[$tag] = array($current[$tag],$result); //...Make it an array using using the existing value and the new value
                        $repeated_tag_index[$tag.'_'.$level] = 1;
                        if($priority == 'tag' and $get_attributes) {
                            if(isset($current[$tag.'_attr'])) { //The attribute of the last(0th) tag must be moved as well

                                $current[$tag]['0_attr'] = $current[$tag.'_attr'];
                                unset($current[$tag.'_attr']);
                            }

                            if($attributes_data) {
                                $current[$tag][$repeated_tag_index[$tag.'_'.$level] . '_attr'] = $attributes_data;
                            }
                        }
                        $repeated_tag_index[$tag.'_'.$level]++; //0 and 1 index is already taken
                    }
                }

            } elseif($type == 'close') { //End of tag '</tag>'
                $current = &$parent[$level-1];
            }
        }

        return($xml_array);
    }

}