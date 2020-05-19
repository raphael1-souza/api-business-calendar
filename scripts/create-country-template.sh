#!/bin/bash


[ $# -ne 1 ] && {
    echo -e "\nfailed: please insert a valid ISO3 code from country"
    echo -e "run: make add-country COUNTRY=[ISO3 Code from Country]"
    echo -e "\t- Example:  $ make add-country COUNTRY=usa\n"
    exit 1
}

country=$1
regex=$(grep -n "^[a-zA-Z][a-zA-Z][a-zA-Z]$" <<< $country)

[ $regex -z ] && {
    echo -e "\nfailed: [$country] not ISO3 valid code, please insert a valid ISO3 code from country"
    echo -e "run: make add-country COUNTRY=[ISO3 Code from Country]"
    echo -e "\t- Example:  $ make add-country COUNTRY=usa\n"
    exit 1
}

echo -e "\n> create template from [$country]"

CREATE_DIR=scripts/$country
CORRECT_DIR=src/countries/countries

mkdir -p $CREATE_DIR
echo "> create helpers dir from [$country]"
mkdir -p $CREATE_DIR/helpers

COUNTRY_UPPER=${country^^}
model=$( cat scripts/model.txt )
echo "> create index.js file from [$COUNTRY_UPPER] class"
echo "${model//TOKEN/$COUNTRY_UPPER}" > $CREATE_DIR/index.js

echo "> move from [$CORRECT_DIR]"
mv $CREATE_DIR $CORRECT_DIR


FILE_ADD_REFERENCE=src/countries/index.js
echo -e "> add reference from class [$COUNTRY_UPPER] file in [$FILE_ADD_REFERENCE]"

REFERENCE_LINE="const countryObjectReferences = {"
line_ref=$( grep -n "^$REFERENCE_LINE$" $FILE_ADD_REFERENCE | cut -d : -f 1 )
#Next line is the correct to add import
((line_ref=line_ref+1))


reference_text="$country: $COUNTRY_UPPER,"
awk -v x="$reference_text" -v line="$line_ref" 'NR==line{print x} 1' $FILE_ADD_REFERENCE > tmp && mv tmp $FILE_ADD_REFERENCE


import_text="import $COUNTRY_UPPER from './countries/$country';"
awk -v x="$import_text" -v line="1" 'NR==line{print x} 1' $FILE_ADD_REFERENCE > tmp && mv tmp $FILE_ADD_REFERENCE


echo -e "> complete\n"
