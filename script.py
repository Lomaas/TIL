import sys
from bs4 import BeautifulSoup
import urllib2
import json
import re

# Get teams
# Parse it to correct format
# Send it to server

import unicodedata, re


def remove_control_chars(s):
    return s.decode('unicode-escape')

tipppeligaLagURL = [
		'http://www.altomfotball.no/element.do?cmd=team&teamId=313&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=328&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=303&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=403&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=306&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=309&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=302&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=308&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=314&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=311&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=326&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=305&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=496&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=315&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=327&tournamentId=1&useFullUrl=false',
		'http://www.altomfotball.no/element.do?cmd=team&teamId=541&tournamentId=1&useFullUrl=false'
]

counter = 0

for rootUrl in tipppeligaLagURL:
	get = urllib2.urlopen(rootUrl).read()
	html = get
	dom = BeautifulSoup(html)
	players = dom.find_all('td', {'class' : 'sd_table_player'})
	team = dom.find('span', {'sd_select_text'})

	print "Team: " + team.get_text()

	teamJSON = {'name' : team.get_text()}
	teamJSON['players'] = []

	for i in players:
		player = i.get_text().encode('ascii', 'ignore')
		player = re.sub(r"(\w)([A-Z])", r"\1 \2", player)
		player = player[1:]
		print player
		teamJSON['players'].append(player)

	print teamJSON

	method = "POST"
	handler = urllib2.HTTPHandler()
	opener = urllib2.build_opener(handler)


	data = {}
	data['name'] = teamJSON['name']

	url = "http://localhost:3000/team"
	request = urllib2.Request(url, data=json.dumps(data))
	request.add_header("Content-Type",'application/json')
	request.get_method = lambda: method

	try:
	    connection = opener.open(request)
	except urllib2.HTTPError,e:
	    connection = e

	if connection.code == 201:
	    data = connection.read()
	    print "Success, " + data
	else:
		print "ERRRO"


	for player in teamJSON['players']:
		print player
		player = re.sub('\s+',' ', player)
		data = {}
		data['name'] = player
		data['team'] = teamJSON['name']
		data['player_id'] = counter
	
		url = "http://localhost:3000/player"
		request = urllib2.Request(url, data=json.dumps(data))
		request.add_header("Content-Type",'application/json')
		request.get_method = lambda: method

		try:
		    connection = opener.open(request)
		except urllib2.HTTPError,e:
		    connection = e

		if connection.code == 201:
		    data = connection.read()
		    print "Success, " + data
		else:
			print "ERRRO"


		counter = counter + 1