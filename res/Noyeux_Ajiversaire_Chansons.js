
/* -------------------------------------------- */
	/* 
		scripts pour Noyeux_Ajiversaire
				pour Chansons
	*/
/* -------------------------------------------- */


	/* Classe CChansons */
			
		function CChansons()
		{
			/* données membre (private) */		// (public :) this.m_Toto;
			
			
					// Gestion du HappyBday
				var m_bClick_HappyBday = false;
				var m_Chansons = document.getElementById("Chansons");
				
					// Gestion des playes_buttons
				var m_ButtonPlayer_new = null;
				var m_ButtonPlayer_old = null;
				
					// Gestion des players				
				var m_Player_new = null;
				var m_Player_old = null;
				
					// gestion du playing (inutilisé)
			//	var m_bPlaying = false;
			
					// récupération des buttons/players
				var m_but01 = document.getElementById("jsAudio_Belle_button");
					var m_p01 = document.getElementById("jsAudio_Belle");
					
				var m_but02 = document.getElementById("jsAudio_Etoile_button");
					var m_p02 = document.getElementById("jsAudio_Etoile");
					
				var m_but03 = document.getElementById("jsAudio_Rtrouve_button");
					var m_p03 = document.getElementById("jsAudio_Rtrouve");
					
				var m_but04 = document.getElementById("jsAudio_Apocalyptico_button");
					var m_p04 = document.getElementById("jsAudio_Apocalyptico");
					
				var m_but05 = document.getElementById("jsAudio_Roy_button");
					var m_p05 = document.getElementById("jsAudio_Roy");
					
				var m_but06 = document.getElementById("jsAudio_FilleFleur_button");
					var m_p06 = document.getElementById("jsAudio_FilleFleur");
					
				var m_but07 = document.getElementById("jsAudio_Saison_button");
					var m_p07 = document.getElementById("jsAudio_Saison");
					
				var m_but08 = document.getElementById("jsAudio_Dimanche_button");
					var m_p08 = document.getElementById("jsAudio_Dimanche");
					
				var m_but09 = document.getElementById("jsAudio_Berk_button");
					var m_p09 = document.getElementById("jsAudio_Berk");
					
				var m_but10 = document.getElementById("jsAudio_Forbiden_button");
					var m_p10 = document.getElementById("jsAudio_Forbiden");
					
				var m_but11 = document.getElementById("jsAudio_WakeUp_button");
					var m_p11 = document.getElementById("jsAudio_WakeUp");
					
				var m_but12 = document.getElementById("jsAudio_DyingSun_button");
					var m_p12 = document.getElementById("jsAudio_DyingSun");
					
					
			/* ---------- ---------- */
			
	
			/* fonctions membres (.h) */	// (public)
			
			
					// Gestion du HappyBday
				this.HappyBday_Click = HappyBday_Click;
				
				this.Chansons_Display = Chansons_Display;
				
					// Click Chansons
				this.SetButton_Clicked = SetButton_Clicked;
				
					// Lectures Chansons
				this.GetPlayer = GetPlayer;
				this.SetPlayer = SetPlayer;
				this.Audio_Play = Audio_Play;
				
				
			/* ---------- ---------- */
	
	
			/* fonctions membres (.cpp) */
			
			
				/* Gestion du HappyBday */
				
					function HappyBday_Click()
					{
						if(m_bClick_HappyBday == true)
						{
							m_bClick_HappyBday = false;
						}
						else
						{
							m_bClick_HappyBday = true;									
						}
						
						Chansons_Display();
					}
					
					function Chansons_Display()
					{
						if(m_bClick_HappyBday == true)
						{
							m_Chansons.style.display = "block";
						}
						else
						{
							m_Chansons.style.display = "none";
						}
					}
					
				/* ---------- */
				
				/* Affichage dynamique */
				
					function SetPlayer_Button_color()
					{
						if(m_Player_new.ended == true)
						{
							m_ButtonPlayer_new.style.color = "gray";
							m_ButtonPlayer_new.style.fontSize = "2em";
						}
						else
						{
							if(m_ButtonPlayer_old != null)
							{
								m_ButtonPlayer_old.style.color = "red";
								m_ButtonPlayer_old.style.fontSize = "1em";
							}
							
							m_ButtonPlayer_new.style.color = "green";
							m_ButtonPlayer_new.style.fontSize = "2em";
						}
					}
					
				/* ---------- */
			
				/* Click Chansons */
				
					function SetButton_Clicked(button_clicked)
					{
						m_ButtonPlayer_old = m_ButtonPlayer_new;
						
						m_ButtonPlayer_new = button_clicked;
					}
				
					function GetPlayer()
					{
						var Player_chosen = null;
						
							// choisi le player correspondant au boutton clické
						switch(m_ButtonPlayer_new)
						{
							case m_but01 :
								Player_chosen = m_p01;
								break;
								
							case m_but02 :
								Player_chosen = m_p02;
								break;
								
							case m_but03 :
								Player_chosen = m_p03;
								break;
								
							case m_but04 :
								Player_chosen = m_p04;
								break;
								
							case m_but05 :
								Player_chosen = m_p05;
								break;
								
							case m_but06 :
								Player_chosen = m_p06;
								break;
								
							case m_but07 :
								Player_chosen = m_p07;
								break;
								
							case m_but08 :
								Player_chosen = m_p08;
								break;
								
							case m_but09 :
								Player_chosen = m_p09;
								break;
								
							case m_but10 :
								Player_chosen = m_p10;
								break;
								
							case m_but11 :
								Player_chosen = m_p11;
								break;
								
							case m_but12 :
								Player_chosen = m_p12;
								break;
							
							default :
								alert("mini 404 : chansons non référencée");
								break;
						}
						
							// le renvoi
						return Player_chosen;
					}
					
				/* ---------- */
			
				/* Lectures Chansons */
				
					function SetPlayer(Player_chosen)
					{
							// met le "en cours dans old
						m_Player_old = m_Player_new;
							// met le choisi dans new
						m_Player_new = Player_chosen;
					}
					
					function Audio_Play()
					{
							// récupère le boutton clické et l'attribut à new, old prenant l'ancien new
						SetButton_Clicked(this);
						
							// récupère le player du bouton clické et l'attribut à new, old prenant l'ancien new
						SetPlayer(GetPlayer());
						
							// pause et termine l'ancien
						if(m_Player_old != null)
						{
							m_Player_old.pause();
						}
						
							// lance le nouveau
						m_Player_new.load();
						m_Player_new.play();
						
							// change la couleur en fonction du boutton et de la lecture
						SetPlayer_Button_color();
						
						
							// cré la récupération de fin de lecture
						m_Player_new.addEventListener("ended", SetPlayer_Button_color, false);
					}
					
				/* ---------- */
					
			/* ---------- ---------- */
			
		}
		
	/* -------------------------------------------- */
	
	
		
	/* Main() */
	
		// initialisation
		
			chansons = new CChansons();
			
			
		// réception des DOM events
		
				// Survole de l'HappyBday
			document.getElementById("HappyBday_jsbutton").addEventListener("mouseenter", chansons.InfoBulle_Displayblock, false);
			document.getElementById("HappyBday_jsbutton").addEventListener("mouseleave", chansons.InfoBulle_Displaynone, false);
		
				// Clickage sur HappyBday
			document.getElementById("HappyBday_jsbutton").addEventListener("click", chansons.HappyBday_Click, false);
		
				// Clickage sur Chansons
			document.getElementById("jsAudio_Belle_button").addEventListener("click", chansons.Audio_Play, false);
			document.getElementById("jsAudio_Etoile_button").addEventListener("click", chansons.Audio_Play, false);
			document.getElementById("jsAudio_Rtrouve_button").addEventListener("click", chansons.Audio_Play, false);
			document.getElementById("jsAudio_Apocalyptico_button").addEventListener("click", chansons.Audio_Play, false);
			document.getElementById("jsAudio_Roy_button").addEventListener("click", chansons.Audio_Play, false);
			document.getElementById("jsAudio_FilleFleur_button").addEventListener("click", chansons.Audio_Play, false);
			document.getElementById("jsAudio_Saison_button").addEventListener("click", chansons.Audio_Play, false);
			document.getElementById("jsAudio_Dimanche_button").addEventListener("click", chansons.Audio_Play, false);
			document.getElementById("jsAudio_Berk_button").addEventListener("click", chansons.Audio_Play, false);
			document.getElementById("jsAudio_Forbiden_button").addEventListener("click", chansons.Audio_Play, false);
			document.getElementById("jsAudio_WakeUp_button").addEventListener("click", chansons.Audio_Play, false);
			document.getElementById("jsAudio_DyingSun_button").addEventListener("click", chansons.Audio_Play, false);
			
	
	/* -------------------------------------------- */

		
/* -------------------------------------------- */
	/*
	*/
/* -------------------------------------------- */





		
		
		
		
		