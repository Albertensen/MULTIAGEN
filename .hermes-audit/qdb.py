import sqlite3, sys
con = sqlite3.connect(sys.argv[1])
try:
    for r in con.execute("SELECT id,email,role FROM user"):
        print(r)
except Exception as e:
    print("TBLERR", e)
