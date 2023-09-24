local OrionLib = loadstring(game:HttpGet(('https://raw.githubusercontent.com/shlexware/Orion/main/source')))()

local Window = OrionLib:MakeWindow({IntroText = "TRGui BETA V4 açılıyor.....",Name = "🇹🇷TRGui BETA V4🇨🇾", HidePremium = false, SaveConfig = true, ConfigFolder = "TRScripts"})

-- Tabs

local MainTab = Window:MakeTab({

	Name = "Hızlı Hileler",	Icon = "rbxassetid://13468978031",

	PremiumOnly = false 

})

-- Button

MainTab:AddButton({

	Name = "Uçma",	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/UnknownDeveloptment/TRScripts/main/Fly"))();

  	end    

})

 MainTab:AddButton({

	Name = "Işınlanma",

	Callback = function()   loadstring(game:HttpGet("https://pastebin.com/bZhByju1"))();

  	end    

})

local MainTab = Window:MakeTab({

	Name = "Mobil",

	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

})

MainTab:AddButton({

	Name = "Shiftlock",

	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Universal-Script-Shiftlock-Mobile-8892"))();

  	end    

})

MainTab:AddButton({

	Name = "Klavye",

	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Universal-Script-Pc-keyboard-script-not-mine-10934"))()

  	end    

})

local MainTab = Window:MakeTab({

	Name = "Oyunlar",

	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

})

MainTab:AddButton({

	Name = "Buz Hub",

	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/IceMael7/NewIceHub/main/Brookhaven"))();

  	end    

})

MainTab:AddButton({

	Name = "Katil Kim 2",

	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/Ethanoj1/EclipseMM2/master/Script", true))();

  	end    

})

MainTab:AddButton({

	Name = "Fırlatma FE",

	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Universal-Script-FE-Yeet-GUI-9620"))();

  	end    

})

MainTab:AddButton({

	Name = "Barry'nin Hapisane Hub'ı",	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/BARRY'S-PRISON-RUN!-(EASTER-HOLIDAY!)-(Obby)-barry-gui-10104"))();

  	end    

})

MainTab:AddButton({

	Name = "Solgun Da Hood",

	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/NighterEpic/Faded/main/YesEpic", true))();

  	end    

})

MainTab:AddButton({

	Name = "Unik Hub",	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Unique-Hub-(14-Gmes)_521"))();

  	end    

})

MainTab:AddButton({

	Name = "Hapisane Hayatı Admin",	Callback = function()   loadstring(game:HttpGet('https://pastebin.com/raw/iZ64yzjE'))();

  	end    

})

MainTab:AddButton({

	Name = "Nexus Hileleri",	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/raw-scriptpastebin/raw/main/B_Genesis%27"))();

  	end    

})

MainTab:AddButton({

	Name = "Uçucu",	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Universal-Script-Volatile-10306"))();

  	end    

})

MainTab:AddButton({

	Name = "Ohio Kodu Editlendi",	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/sunexn/ohio./main/ohio.lua",true))();

  	end    

})

local MainTab = Window:MakeTab({

	Name = "Çalıştırıcılar",	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

})

MainTab:AddButton({

	Name = "Arkus X",	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Universal-Script-Arceus-X-v3-UI-9331"))();

  	end    

})

local MainTab = Window:MakeTab({

	Name = "Evrensel",	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

})

MainTab:AddButton({

	Name = "Sonsuz Verim", 	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Infinite-Yield_500"))();

  	end    

})

MainTab:AddButton({

	Name = "Evrensel Hub",

	Callback = function()   loadstring(game:HttpGetAsync("https://raw.githubusercontent.com/richie0866/orca/master/public/snapshot.lua"))();

  	end    

})

local CreditsTab = Window:MakeTab({

	Name = "Krediler",

	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

})

OrionLib:MakeNotification({

	Name = "TRScripts'ten bir mesaj!",

	Content = "TRGui BETA V4'ü kullandığın için teşşekürler!",

	Image = "rbxassetid://13468978031",

	Time = 5

})

CreditsTab:AddParagraph("Krediler: "," TRScripts | Yapımcı")

coroutine.resume(NotificationCoroutine)

OrionLib:Init()
