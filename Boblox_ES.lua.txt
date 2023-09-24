local OrionLib = loadstring(game:HttpGet(('https://raw.githubusercontent.com/shlexware/Orion/main/source')))()

local Window = OrionLib:MakeWindow({IntroText = "Abriendo TRGui BETA V4.....",Name = "🇪🇸TRGui BETA V4🇲🇽", HidePremium = false, SaveConfig = true, ConfigFolder = "TRScripts"})

-- Tabs

local MainTab = Window:MakeTab({

	Name = "Trucos rápidos",	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

}) 

-- Button

MainTab:AddButton({

	Name = "Volar",	Callback = function()   loadstring(game:HttpGet("https://raw.githubuserconcent.com/UnknownDeveloptment/TRScripts/main/Fly.lua"))();

  	end    

})

MainTab:AddButton({

	Name = "Teletransportarse",	Callback = function()   loadstring(game:HttpGet("https://raw.githubuserconcent.com/TRScripts/main/Teleport.lua"))();

  	end    

})

local MainTab = Window:MakeTab({

	Name = "Móvil",

	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

})

MainTab:AddButton({

	Name = "Bloqueo de mayúsculas",

	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Universal-Script-Shiftlock-Mobile-8892"))();

  	end    

})

MainTab:AddButton({

	Name = "el teclado",

	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/advxzivhsjjdhxhsidifvsh/mobkeyboard/main/main.txt", true))()

  	end    

})

local MainTab = Window:MakeTab({

	Name = "Juegos",

	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

})

MainTab:AddButton({

	Name = "Centro de hielo",

	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/IceMael7/NewIceHub/main/Brookhaven"))();

  	end    

})

MainTab:AddButton({

	Name = "misterio de asesinato 2",

	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/Ethanoj1/EclipseMM2/master/Script", true))();

  	end    

})

MainTab:AddButton({

	Name = "Yeet FE",

	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Universal-Script-FE-Yeet-GUI-9620"))();

  	end    

})

MainTab:AddButton({

	Name = "Centro de la prisión de Barry",	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/BARRY'S-PRISON-RUN!-(EASTER-HOLIDAY!)-(Obby)-barry-gui-10104"))();

  	end    

})

MainTab:AddButton({

	Name = "Capucha Da hood",

	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/NighterEpic/Faded/main/YesEpic", true))();

  	end    

})

MainTab:AddButton({

	Name = "Centro único",	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Unique-Hub-(14-Gmes)_521"))();

  	end    

})

MainTab:AddButton({

	Name = "Administrador de vida en prisión",	Callback = function()   loadstring(game:HttpGet('https://pastebin.com/raw/iZ64yzjE'))();

  	end    

})

MainTab:AddButton({

	Name = "Explosiones de Nexus",	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/raw-scriptpastebin/raw/main/B_Genesis%27"))();

  	end    

})

MainTab:AddButton({

	Name = "Volátil",	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Universal-Script-Volatile-10306"))();

  	end    

})

MainTab:AddButton({

	Name = "Código de Ohio editado",	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/sunexn/ohio./main/ohio.lua",true))();

  	end    

})

local MainTab = Window:MakeTab({

	Name = "Ejecutores",	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

})

MainTab:AddButton({

	Name = "Arceus X",	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Universal-Script-Arceus-X-v3-UI-9331"))();

	

  	end    

})

local MainTab = Window:MakeTab({

	Name = "Universal",	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

})

MainTab:AddButton({

	Name = "Rendimiento Infinito", 	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Infinite-Yield_500"))();

  	end    

})

MainTab:AddButton({

	Name = "Centro Universal",

	Callback = function()   loadstring(game:HttpGetAsync("https://raw.githubusercontent.com/richie0866/orca/master/public/snapshot.lua"))();

  	end    

})

local CreditsTab = Window:MakeTab({

	Name = "Créditos",

	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

})

OrionLib:MakeNotification({

	Name = "¡Un mensaje de TRScripts!!",

	Content = "¡Gracias por usar TRGui BETA V4!",

	Image = "rbxassetid://13468978031",

	Time = 5

})

CreditsTab:AddParagraph("Créditos: "," TRScripts | El dueño")

coroutine.resume(NotificationCoroutine)

OrionLib:Init()
