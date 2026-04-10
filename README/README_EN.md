# GM's Cantrip Library for MapTool

## 📖 About the Project

A collection of simple utility macros for the MapTool VTT, implemented as library tokens. The main goal is to simplify game field management, especially useful for offline play on a large TV screen.

## 🎮 Library Tokens

### 1. Lib:GMsCantripLibrary
A set of tools for managing player map display.

#### Available Macros:

** init ** (turquoise button)
- **Purpose:** Initialize parameters
- **Key Feature:** Sets parameters like defaultZoom, width, height, rotate, and others that are best left unchanged
- **Setup Required:**
  1. Put token on any map if it hasn’t been placed yet, and select it
  2. Open the `init` macro editor on the selected token pane
  3. Set the desired values for the parameters listed above
  4. Save the macro and run it once
  5. No need to move the macro to the campaign panel
  6. If necessary, the setup procedure (steps 2-4) can be repeated
- **Zoom Values:** `1.0 = 100%`, `1.5 = 150%`, `2.0 = 200%`, etc.
- **Parameters:**
  1. defaultZoom - default zoom value matching the grid size on the players screen, used for Player Zoom, default is 0.4056
  2. width - width of the players screen resolution, used for Handout, default is 3840 for 4K TV
  3. height - height of the players screen resolution, used for Handout, default is 2160 for 4K TV
  4. rotate - rotation angle of handout/art image, used for Handout, default is -90 (degrees), if the players screen is not in a standard orientation
  5. other parameters are required auxiliary values and should not be changed
  
** Center Player View ** (green button)
- **Purpose:** Centers the player map exactly where the GM is looking
- **Key Feature:** Does NOT change zoom scale, preserving the correct grid size
- **Usage:**
  1. Put token on any map if it hasn’t been placed yet, and select it
  2. Drag the macro `Center Player View` from token to your campaign panel
  3. Click to instantly align player view with GM view
  4. Works best when assigned to a hotkey
- **Configuration:** No editing required

** Player Zoom ** (purple button)
- **Purpose:** Applies a predefined zoom level to player map, based on defaultZoom 
- **Key Feature:** Changes map zoom to match the configured parameter, e.g., to align the grid with real-world scale
- **Usage:**
  1. Put token on any map if it hasn’t been placed yet, and select it
  2. Drag the macro `Player Zoom` from token to your campaign panel
  3. Click to match the players map zoom to the configured value
  4. Works best when assigned to a hotkey
- **Note:** Perfect for initial setup before a gaming session
- **Configuration:** No editing required

** - Zoom и + Zoom ** (gray buttons)
- **Purpose:** Adjusts players map zoom in 5% increments, allowing zoom in/out
- **Setup Required:**
  1. Put token on any map if it hasn’t been placed yet, and select it
  2. Drag the `- Zoom` and `+ Zoom` macros to the campaign panel
  3. Hotkeys can be assigned 
- **Note:** Includes checks to keep zoom between 5% and 500%
- **Configuration:** No editing required

### 2. Lib:Door
Interactive doors supporting VBL and MBL.

#### How does it work:

**Step 1: Map Preparation**
1. Draw walls with proper VBL/MBL on your map
2. Place a `Lib:Door` token library at each door location (don't copy token from map)
3. *Important:* MapTool will automatically rename added tokens with counter  (e.g., `Lib:Door 1`, `Lib:Door 2`)

**Step 2: Door Initialization**
1. Select a door token
2. Click the `init` macro on selected panel
3. VBL/MBL will automatically transfer from map to token

**Step 3: Door Usage**
1. Drag the `Use Door` macro (yellow button) to your campaign panel
2. Select any door token on a map
3. Click `Use Door` to toggle open/closed state

#### ⚠️ Notes:

- **Player Visibility:** For secret doors, you can uncheck "Visible to players"
- **Visual Effects:** To make doors visually distinct use "Aura"/"Halo" settings

### 2. Lib:Handout
Token that allows to show handout or art on players screen.

#### How does it work:

**Step 1: Prepare the token**
1. Place a `Lib:Handout` token on the map in a convenient location, for example at an encounter point to later show what a monster or NPC looks like
2. *Important:* MapTool will automatically rename added tokens with counter  (e.g., `Lib:Handout 1`, `Lib:Handout 2`)
3. Open the token image settings
4. Add images from the library to Portrait and/or Handout that you want to display on screen
5. Save and close the token settings

**Step 2: Initialize the handout**
1. Select the handout token
2. In the token macro panel, click `init`
3. The token will pull parameters from Lib:GMsCantripLibrary or assign default values as described earlier

**Step 3: Use the handout**
1. Drag the `Handout` and `Portrait` macros (beige buttons) to the campaign panel
2. Select any handout token on the map
3. Click `Handout` or `Portrait` to display the image on the players’ screen
4. Clicking again closes the image window

#### ⚠️ Замечания:

- **Player Visibility:** By default, "Visible to players" is unchecked


## ⚠️ Technical Limitations

- Macros are intentionally kept simple and may lack advanced error handling
- Primarily designed for local play with a shared screen
- Requires MapTool 1.10+ with default settings

## 🔄 Updates

Created for personal use. Updates are released as new features are added or bugs are fixed.

---

*All macros use standard MapTool functionality.*