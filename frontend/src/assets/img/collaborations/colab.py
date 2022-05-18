import os
import requests
for file in os.listdir():
     myobj = {'url': '../assets/img/collaborations/'+file}
     x = requests.post('http://localhost:8000/collab/add', data=myobj)
     print(x.text)
print("Done")
