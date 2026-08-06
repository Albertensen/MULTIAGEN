import sqlite3, sys
con = sqlite3.connect(sys.argv[1])
cur = con.cursor()
for (name,) in cur.execute("SELECT name FROM sqlite_master WHERE type='table' ORDER BY name"):
    if 'api' in name.lower() or 'user' in name.lower() or 'key' in name.lower():
        cols = cur.execute(f"PRAGMA table_info({name})").fetchall()
        print(f"== {name} ==")
        for c in cols: print("  ", c[1], c[2])
