
/* -------------------------------------------- */
	/* 
		scripts pour Noyeux_Ajiversaire
				pour Coeur
	*/
/* -------------------------------------------- */


			
	/* classe CHeart */
	
		function CHeart()
		{
			/* données membre (private) */		// (public :) this.m_Toto;
			
					// test du "déja clické"
				var m_bClick = false;
					
					// gestion du breathing
				var m_tInterval;
				
				var m_tTime_in;
				var m_tTime_out;
			
					// récupération de l'image coeur
				var m_Coeur_img = document.getElementById("Coeur_img");
					
					// Gestion des ranges
				var m_Coeur_fRange = document.getElementById("jsCoeur_frequence_range");
					var m_nfRange;
				var m_Coeur_vRange = document.getElementById("jsCoeur_vitesse_range");
					var m_nvRange;
				
					// initialisation des ranges
				GetSetRange();
			
					// récupération des sons coeur
				var m_Coeur_son_in = document.getElementById("jsCoeur_son_in");
					m_Coeur_son_in.volume = 0.5;
				var m_Coeur_son_out = document.getElementById("jsCoeur_son_out");
					m_Coeur_son_out.volume = 0.5;
					
			/* ---------- ---------- */
			
	
			/* fonctions membres (.h) */
				
					// Fonctions Breath
				this.SetCoeur_img = SetCoeur_img;
				this.HeartBreath_in = HeartBreath_in;
				this.HeartBreath_out = HeartBreath_out;
				this.HeartBreathing = HeartBreathing;
				
					// Gestions évennements
				this.GetSetRange = GetSetRange;
				this.HeartBreathing_Click = HeartBreathing_Click;
					
			/* ---------- ---------- */
	
	
			/* fonctions membres (.cpp) */
			
				/* Fonctions Breath */
				
					function SetCoeur_img(str)
					{
						if(str == "in")
						{
								// grossissement (centré) de l'image
							m_Coeur_img.style.width = "400px";
							m_Coeur_img.style.margin = "20px 50px 0px";
						}
						else	// str == "out"
						{
								// réduction (centré) de l'image
							m_Coeur_img.style.width = "200px";
							m_Coeur_img.style.margin = "150px 150px 0px";
						}
					}
			
					function HeartBreath_in()
					{
							// image grossie
						SetCoeur_img("in");
						
							// playage du son coeur_in
						m_Coeur_son_in.play();
					}
				
					function HeartBreath_out()
					{
							// image "réduite"
						SetCoeur_img("out");
												
							// playage du son coeur_out
						m_Coeur_son_out.play();
					}
					
					function HeartBreathing()
					{
							// lançage du beat si pas décliqué
						if(m_bClick == true)
						{
								// lancement sans latence (in puis out quand in est "fini")
							HeartBreath_in(); 
							m_tTime_out = setTimeout(HeartBreath_out, (m_nvRange));
							
								// lancement récurssif in puis out (quand le lancement sans attente est "fini")
							m_tInterval = setInterval	(	
															function()	
															{	
																HeartBreath_in(); 
																m_tTime_out = setTimeout(HeartBreath_out, (m_nvRange));
															},
															(m_nfRange)
														);
						}
						else
						{
								// stopage et "suppression" des timer
							clearInterval(m_tInterval);
								clearTimeout(m_tTime_out);
								
								// retour à la normal
							SetCoeur_img("out");
						}
					}
					
				/* ---------- */
					
				/* Gestions évennements */
					
					function HeartBreathing_Click()
					{
							// inverse la valeur de m_bclick, et affiche ou cache le range fréquence
						if(m_bClick == true)
						{
							m_Coeur_fRange.style.visibility = "visible";
							
							m_bClick = false;
						}
						else
						{
							m_Coeur_fRange.style.visibility = "hidden";
							
							m_bClick = true;
						}
							
							// lance le beat
						HeartBreathing();
					}
					
					function GetSetRange()
					{
						// Frequency Range
						
								// récupération de la valeur utilisable de la fréquence
							m_nfRange = 470 + ( 300 - (m_Coeur_fRange.value * 30) );
							
								// changement du range en fonction de cette valeur
							if(m_nfRange < 470)
							{
								m_Coeur_fRange.style.background = "red";
							}
							else
							{
								m_Coeur_fRange.style.background = "transparent";
							}
							
						// Speed Range
						
								// récupération de la valeur utilisable de la vitesse en fonction de la fréquence
							m_nvRange = 200 + ( 120 - (m_Coeur_vRange.value * 12) );
							
								// changement du range en fonction de cette valeur
							if( (m_nvRange < 200) || ((m_nfRange - m_nvRange) < 270) )
							{
								m_Coeur_vRange.style.background = "red";
							}
							else
							{
								m_Coeur_vRange.style.background = "transparent";
							}
					}
					
				/* ---------- */
					
			/* ---------- ---------- */
			
			
		}
		
	/* -------------------------------------------- */
	
	
	/* Main() */
	
			
		// initialisation
		
			heart = new CHeart();
	
		// réception des messages DOM
			
				// Changement sur range
			document.getElementById("jsCoeur_frequence_range").addEventListener("change", heart.GetSetRange, false);
			document.getElementById("jsCoeur_frequence_range").addEventListener("keyup", heart.GetSetRange, false);
			
			document.getElementById("jsCoeur_vitesse_range").addEventListener("change", heart.GetSetRange, false);
			document.getElementById("jsCoeur_vitesse_range").addEventListener("keyup", heart.GetSetRange, false);
				
				// click sur bouton brething
			document.getElementById("jsCoeur_button").addEventListener("click", heart.HeartBreathing_Click, false);
			
				// Sourris arrive sur img
			document.getElementById("Coeur_img").addEventListener("mouseenter", heart.HeartBreath_in, false);
			
				// Sourris sort de img
			document.getElementById("Coeur_img").addEventListener("mouseleave", heart.HeartBreath_out, false);
	
	/* -------------------------------------------- */

		
/* -------------------------------------------- */
	/*
	*/
/* -------------------------------------------- */
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	