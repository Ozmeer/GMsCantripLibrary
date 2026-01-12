[h: args = macro.args]
[h: x = json.get(args, "x")]
[h: y = json.get(args, "y")]
[h: goto(x, y)] 