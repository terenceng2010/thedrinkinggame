# thedrinkinggame
assist you to join a drinking game surrouding you

landing page
	-> introduction
	-> get started

main page
	-> listview for surounding game
	-> mapview for surrounding game
	-> Create new game form

Create new game page
	-> game name
	-> game type (initial version would only have drunken game)
	-> drinks included
	-> location
		-> auto detect or pick a point from map view
	-> host name and photo (type manually, take photo directly)
	-> create button

Game room page (id, host_id, join_game_id, other_peoples_id)

	-> first horizontal panel
		-> game name
		-> drinks included
		-> location
		-> start date
		-> right hand size - handy rules shown in dialog

	-> second horzontal panel
		-> if(host)
			-> host pin
			-> join game pin
			-> end game button		
	-> main panel
		-> people
			-> status
			-> if(host)
				-> remove people
		-> add person button (name and photo. also join game pin if does not have join game pin)
		
		-> horizontal line
		-> live photos (position at bottom)
			-> swipe for slideshows of photos with caption. (if there is no live photo, tells user to add some)
			-> taking photo button
			-> download photo button
		
	-> bottom panel (status for drag-and-drop to an user)
		-> bro-bro status
		-> thumb master
		-> question master
		

-------
use pin for claiming host
use another pin to let people join game (only host knows the pin) , the same pin is also for taking photo
game will automatically end if no status update for 2 hours.

#installation
clone the repo and run it with meteor
