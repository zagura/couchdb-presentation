#!/bin/bash

declare host=http://127.0.0.1:5984
declare DB=projekt_db
declare type_="-H \"Content-Type: application/json\""
declare -a arr=(
	# Połączenie z baza danych
	"curl $host"
	# usuniecie istniejacej bazy projekt_db
	"curl -X DELETE $host/$DB"
	# Utworzenie nowej bazy o tej samej nazwie
	"curl -X PUT $host/$DB"
	# komenda do pokazania listy baz danych na serwerze
	"curl -X GET $host/_all_dbs"
	# wstawienie nowego dokumentu
	#"curl -X POST $host/$DB -d '{\"company\": \"Example, Inc.\"}' $type_"
	#"curl -X POST $host/$DB -d \"{\"id\": 001, \"Programming Language\" : \"Erlang\", \"Paradigm\" : \"Functional\"}\" -H 'Content-Type: application/json'"
	#"curl $type_ -X POST $host/$DB -d '{\"id\": 002, \"Programming Language\" : \"Java\", \"Paradigm\" : \"Functional\"}' "
	# aktualizacja pliku
	#curl -X PUT http://127.0.0.1:5984/test_db/cc6b37f1e6b2215f2a5ccac38c000a43 -d '{"_rev": "1-61280846062dcdb986c5a6c4aa9aaf03", "name": "Ash Ketchum", "age": 12, "type": "trainer"}' -H "Content-Type: application/json"
	"curl -X PUT http://127.0.0.1:5984/albums"
	"curl -vX PUT http://127.0.0.1:5984/albums/6e1295ed6c29495e54cc05947f18c8af -d '{\"title\":\"There is Nothing Left to Lose\",\"artist\":\"Foo Fighters\"}'"
)
declare buffer


for i in "${arr[@]}"
do
   echo "$i"
   $i
   read buffer
done
