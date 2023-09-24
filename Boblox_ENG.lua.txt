local OrionLib = loadstring(game:HttpGet(('https://raw.githubusercontent.com/shlexware/Orion/main/source')))()

local Window = OrionLib:MakeWindow({IntroText = "TRGui BETA V4 is loading.....",Name = "🇺🇸TRGui BETA V4🇬🇧", HidePremium = false, SaveConfig = true, ConfigFolder = "TRScripts"})

-- Tabs

local MainTab = Window:MakeTab({

	Name = "Quick Hacks",	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

})

-- Button

MainTab:AddButton({

	Name = "Fly",

	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/UnknownDeveloptment/TRScripts/main/Fly.lua", true))();

  	end    

})

MainTab:AddButton({

	Name = "Teleport",	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/UnknownDeveloptment/TRScripts/main/Teleport.lua"))();

  	end    

})

local MainTab = Window:MakeTab({

	Name = "Mobile",

	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

})

MainTab:AddButton({

	Name = "Shiftlock",

	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/advxzivhsjjdhxhsidifvsh/mobkeyboard/main/main.txt", true))()

  	end    

})

MainTab:AddButton({

	Name = "Keyboard",

	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/advxzivhsjjdhxhsidifvsh/mobkeyboard/main/main.txt", true))()

  	end    

})

local MainTab = Window:MakeTab({

	Name = "Games",

	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

})

MainTab:AddButton({

	Name = "Ice Hub",

	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/IceMael7/NewIceHub/main/Brookhaven"))();

  	end    

})

MainTab:AddButton({

	Name = "MM2",

	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/Ethanoj1/EclipseMM2/master/Script", true))();

  	end    

})

MainTab:AddButton({

	Name = "Yeet FE",

	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Universal-Script-FE-Yeet-GUI-9620"))();

  	end    

})

MainTab:AddButton({

	Name = "Barry's Prison Hub",	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/BARRY'S-PRISON-RUN!-(EASTER-HOLIDAY!)-(Obby)-barry-gui-10104"))();

  	end    

})

MainTab:AddButton({

	Name = "Faded Da Hood",

	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/NighterEpic/Faded/main/YesEpic", true))();

  	end    

})

MainTab:AddButton({

	Name = "Unique Hub",	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Unique-Hub-(14-Gmes)_521"))();

  	end    

})

MainTab:AddButton({

	Name = "Prison Life Admin",	Callback = function()   loadstring(game:HttpGet('https://pastebin.com/raw/iZ64yzjE'))();

  	end    

})

MainTab:AddButton({

	Name = "Nexus Exploits",	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/raw-scriptpastebin/raw/main/B_Genesis%27"))();

  	end    

})

MainTab:AddButton({

	Name = "Volatile",	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Universal-Script-Volatile-10306"))();

  	end    

})

MainTab:AddButton({

	Name = "Ohio Script Edited",	Callback = function()   loadstring(game:HttpGet("https://raw.githubusercontent.com/sunexn/ohio./main/ohio.lua",true))();

  	end    

})

local MainTab = Window:MakeTab({

	Name = "Executors",	Icon = "rbxassetid://13468978031",

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

	Name = "Infinite Yield",	Callback = function()   loadstring(game:HttpGet("https://scriptblox.com/raw/Infinite-Yield_500"))();

  	end    

})

MainTab:AddButton({

	Name = "Universal Hub",

	Callback = function()   loadstring(game:HttpGetAsync("https://raw.githubusercontent.com/richie0866/orca/master/public/snapshot.lua"))();

  	end    

})

local CreditsTab = Window:MakeTab({

	Name = "Credits",

	Icon = "rbxassetid://13468978031",

	PremiumOnly = false

})

OrionLib:MakeNotification({

	Name = "A message from TRScripts",

	Content = "Thanks for using TRGui BETA V4!",

	Image = "rbxassetid://13468978031",

	Time = 5

})

CreditsTab:AddParagraph("Credits: "," TRScripts | The Owner")

coroutine.resume(NotificationCoroutine)

OrionLib:Init()
