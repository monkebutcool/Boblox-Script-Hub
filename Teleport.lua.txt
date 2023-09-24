-- Gui to Lua
-- Version: 3.2

-- Instances:

local Tutorial = Instance.new("ScreenGui")
local OpenFrame = Instance.new("Frame")
local Open = Instance.new("TextButton")
local Main = Instance.new("Frame")
local TextLabel = Instance.new("TextLabel")
local TextLabel_2 = Instance.new("TextLabel")
local Close = Instance.new("TextButton")
local ImageLabel = Instance.new("ImageLabel")
local Teleport = Instance.new("TextButton")
local TextLabel_3 = Instance.new("TextLabel")
local TextBox = Instance.new("TextBox")

--Properties:

Tutorial.Name = "Tutorial"
Tutorial.Parent = game.CoreGui

OpenFrame.Name = "OpenFrame"
OpenFrame.Parent = Tutorial
OpenFrame.Active = true
OpenFrame.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
OpenFrame.BackgroundTransparency = 0.500
OpenFrame.BorderColor3 = Color3.fromRGB(0, 0, 0)
OpenFrame.Position = UDim2.new(0.891908348, 0, 0.654420495, 0)
OpenFrame.Size = UDim2.new(0, 100, 0, 50)

Open.Name = "Open"
Open.Parent = OpenFrame
Open.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
Open.BackgroundTransparency = 0.500
Open.BorderColor3 = Color3.fromRGB(0, 0, 0)
Open.Position = UDim2.new(-0.000202026364, 0, -0.00305725099, 0)
Open.Size = UDim2.new(0, 100, 0, 50)
Open.Font = Enum.Font.Sarpanch
Open.Text = "Open"
Open.TextColor3 = Color3.fromRGB(255, 255, 255)
Open.TextScaled = true
Open.TextSize = 14.000
Open.TextStrokeColor3 = Color3.fromRGB(255, 255, 255)
Open.TextWrapped = true
Open.MouseButton1Down:connect(function()
	Main.Visible = true
	OpenFrame.Visible = false
end)

Main.Name = "Main"
Main.Parent = Tutorial
Main.Active = true
Main.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
Main.BackgroundTransparency = 0.500
Main.BorderColor3 = Color3.fromRGB(0, 0, 0)
Main.Position = UDim2.new(0.206340134, 0, 0.291599989, 0)
Main.Size = UDim2.new(0, 583, 0, 332)
Main.Visible = false
Main.Draggable = true

TextLabel.Parent = Main
TextLabel.Active = true
TextLabel.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
TextLabel.BackgroundTransparency = 0.500
TextLabel.BorderColor3 = Color3.fromRGB(0, 0, 0)
TextLabel.Position = UDim2.new(0, 0, -0.00052341976, 0)
TextLabel.Size = UDim2.new(0, 583, 0, 50)
TextLabel.Font = Enum.Font.SourceSansItalic
TextLabel.Text = "Teleport Player GUI"
TextLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
TextLabel.TextScaled = true
TextLabel.TextSize = 14.000
TextLabel.TextStrokeColor3 = Color3.fromRGB(255, 255, 255)
TextLabel.TextWrapped = true

TextLabel_2.Parent = Main
TextLabel_2.Active = true
TextLabel_2.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
TextLabel_2.BackgroundTransparency = 0.500
TextLabel_2.BorderColor3 = Color3.fromRGB(0, 0, 0)
TextLabel_2.Position = UDim2.new(0, 0, 0.850090206, 0)
TextLabel_2.Size = UDim2.new(0, 583, 0, 50)
TextLabel_2.Font = Enum.Font.SourceSansItalic
TextLabel_2.Text = "GUI Maker : Ahmed_Prowy"
TextLabel_2.TextColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_2.TextScaled = true
TextLabel_2.TextSize = 14.000
TextLabel_2.TextStrokeColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_2.TextWrapped = true

Close.Name = "Close"
Close.Parent = Main
Close.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
Close.BackgroundTransparency = 0.500
Close.BorderColor3 = Color3.fromRGB(0, 0, 0)
Close.Position = UDim2.new(0.914032459, 0, -0.000113993883, 0)
Close.Size = UDim2.new(0, 50, 0, 50)
Close.Font = Enum.Font.SourceSansSemibold
Close.Text = "X"
Close.TextColor3 = Color3.fromRGB(255, 255, 255)
Close.TextSize = 50.000
Close.TextStrokeColor3 = Color3.fromRGB(255, 255, 255)
Close.MouseButton1Down:connect(function()
	OpenFrame.Visible = true
	Main.Visible = false
end)

ImageLabel.Parent = Main
ImageLabel.Active = true
ImageLabel.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
ImageLabel.BackgroundTransparency = 1.000
ImageLabel.BorderColor3 = Color3.fromRGB(0, 0, 0)
ImageLabel.Position = UDim2.new(-5.47013187e-05, 0, -0.00138611393, 0)
ImageLabel.Size = UDim2.new(0, 75, 0, 50)
ImageLabel.Image = "http://www.roblox.com/asset/?id=6830485913"

Teleport.Name = "Teleport"
Teleport.Parent = Main
Teleport.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
Teleport.BackgroundTransparency = 0.500
Teleport.BorderColor3 = Color3.fromRGB(0, 0, 0)
Teleport.Position = UDim2.new(0.217702299, 0, 0.640216887, 0)
Teleport.Size = UDim2.new(0, 328, 0, 49)
Teleport.Font = Enum.Font.Roboto
Teleport.Text = "Teleport"
Teleport.TextColor3 = Color3.fromRGB(255, 255, 255)
Teleport.TextSize = 40.000
Teleport.TextStrokeColor3 = Color3.fromRGB(255, 255, 255)
Teleport.TextWrapped = true
Teleport.MouseButton1Click:connect(function()
	local tp_namedplayer = TextBox.Text
	local tp_player = game:GetService("Players")[tp_namedplayer]
	local PLR = game:GetService("Players").LocalPlayer
	local p = TextBox.Text

	if tp_player then
		for i = 1,1 do
			wait(.08)
			PLR.Character.HumanoidRootPart.CFrame = tp_player.Character.HumanoidRootPart.CFrame + Vector3.new(0, 0, -1)
		end
	end
end)

TextLabel_3.Parent = Main
TextLabel_3.Active = true
TextLabel_3.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
TextLabel_3.BackgroundTransparency = 1.000
TextLabel_3.BorderColor3 = Color3.fromRGB(0, 0, 0)
TextLabel_3.Position = UDim2.new(0.106525294, 0, 0.148282975, 0)
TextLabel_3.Size = UDim2.new(0, 458, 0, 79)
TextLabel_3.Font = Enum.Font.Roboto
TextLabel_3.Text = "Enter The Players Name Here"
TextLabel_3.TextColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_3.TextScaled = true
TextLabel_3.TextSize = 40.000
TextLabel_3.TextStrokeColor3 = Color3.fromRGB(255, 255, 255)
TextLabel_3.TextWrapped = true

TextBox.Parent = Main
TextBox.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
TextBox.BackgroundTransparency = 0.700
TextBox.Position = UDim2.new(0.217702314, 0, 0.423602074, 0)
TextBox.Size = UDim2.new(0, 329, 0, 50)
TextBox.Font = Enum.Font.Roboto
TextBox.Text = "Player"
TextBox.TextColor3 = Color3.fromRGB(0, 0, 0)
TextBox.TextSize = 40.000
