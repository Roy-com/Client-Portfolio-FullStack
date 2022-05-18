import os
import requests
for file in os.listdir():
    if file == "colab.py":
        continue
    # myobjd = {'url': '../assets/img/collaborations/'+file}
    # y= requests.delete('http://localhost:8000/collab/del', data=myobjd)
    myobj = {'url': '/img/collaborations/'+file}
    x = requests.post('http://localhost:8000/collab/add', data=myobj)
    print(x.text)
print("Done")
