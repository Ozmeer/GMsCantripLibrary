# GM's Cantrip Library for MapTool

## 📖 About the Project

A collection of simple utility macros for the MapTool VTT, implemented as library tokens. The main goal is to simplify game field management, especially useful for offline play on a large TV screen.

## 🎮 Library Tokens

### 1. Lib:GMsCantripLibrary
A set of tools for managing player map display.

#### Available Macros:

**🎯 Center Player View** (green button)
- **Purpose:** Centers the player map exactly where the GM is looking
- **Key Feature:** Does NOT change zoom scale, preserving the correct grid size
- **Usage:**
  1. Put token on any map and select it
  2. Drag the macro `Center Player View` from token to your campaign panel
  3. Click to instantly align player view with GM view
  4. Works best when assigned to a hotkey
- **Configuration:** No editing required

**🔍 Player Zoom** (purple button)
- **Purpose:** Applies a predefined zoom level to player map
- **Setup Required:**
  1. Put token on any map and select it
  2. Drag the macro `Player Zoom` from token to your campaign panel
  3. Open `Player Zoom` macro editor from campaign panel
  4. Set the `zoom` variable to your preferred value (1.0 - default)
  5. Save changes
- **Zoom Values:** `1.0 = 100%`, `1.5 = 150%`, `2.0 = 200%`, etc.
- **Usage:** Perfect for initial setup before a gaming session

### 2. Lib:Door
Interactive doors supporting VBL and MBL.

#### 🚪 How does it work:

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


## ⚠️ Technical Limitations

- Macros are intentionally kept simple and may lack advanced error handling
- Primarily designed for local play with a shared screen
- Requires MapTool 1.10+ with default settings

## 🔄 Updates

Created for personal use. Updates are released as new features are added or bugs are fixed.

---

*All macros use standard MapTool functionality.*