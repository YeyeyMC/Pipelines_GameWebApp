import json, io, base64
import matplotlib
matplotlib.use('agg') 
import matplotlib.pyplot as plt
from js import document, window

# We get data from the window context (in react code) as we learned in class :).
data = json.loads(window.__pyodideData)

users = data["users"]
scores = data["scores"]

names = [d['displayName'] for d in users]
highScores = [d['highScore'] for d in users]

fig, ax = plt.subplots(figsize=(6, 4))
ax.bar(names, highScores, color='skyblue', edgecolor='blue')
ax.set_title('Player Scores')
ax.set_ylabel('Scores')

buf = io.BytesIO()
fig.savefig(buf, format='png')
buf.seek(0)
img_b64_1 = base64.b64encode(buf.read()).decode('utf-8')
plt.close(fig)

# second graph

gamesPlayed = [d['gamesPlayed'] for d in users]

fig1, ax = plt.subplots(figsize=(6, 4))
ax.bar(names, gamesPlayed, color='skyblue', edgecolor='blue')
ax.set_title('Games Played per Player')
ax.set_ylabel('Games Played')

buf = io.BytesIO()
fig1.savefig(buf, format='png')
buf.seek(0)
img_b64_2 = base64.b64encode(buf.read()).decode('utf-8')
plt.close(fig1)

#third graph

sessionTimes = [d['endTimestamp'] for d in scores]
sessionScores = [d['score'] for d in scores]

x = list(range(len(scores)))

fig2, ax = plt.subplots(figsize=(6, 4))
ax.plot(x, sessionScores, marker='o')
ax.set_title('Score Timeline')
ax.set_ylabel('Score')
ax.set_xlabel('Session')

ax.set_xticks(x)
ax.set_xticklabels(x)

buf = io.BytesIO()
fig2.savefig(buf, format='png')
buf.seek(0)
img_b64_3 = base64.b64encode(buf.read()).decode('utf-8')
plt.close(fig2)

# fourth graph

clicks = [d['clicks'] for d in scores]
sessionScores = [d['score'] for d in scores]

fig3, ax = plt.subplots(figsize=(6, 4))
ax.scatter(clicks, sessionScores)

ax.set_title('Clicks vs Score')
ax.set_xlabel('Clicks')
ax.set_ylabel('Score')

buf = io.BytesIO()
fig3.savefig(buf, format='png')
buf.seek(0)
img_b64_4 = base64.b64encode(buf.read()).decode('utf-8')
plt.close(fig3)

target = document.getElementById('pyodide-target')
target.innerHTML = f'''
  <img src="data:image/png;base64,{img_b64_1}" alt="Chart 1" />
  <img src="data:image/png;base64,{img_b64_2}" alt="Chart 2" />
  <img src="data:image/png;base64,{img_b64_3}" alt="Chart 3" />
  <img src="data:image/png;base64,{img_b64_4}" alt="Chart 4" />
'''