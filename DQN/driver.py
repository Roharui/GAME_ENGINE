
from selenium import webdriver
from time import sleep
import tensorflow as tf
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense
import numpy as np

cost = 0

driver = webdriver.Chrome("C:\\Users\\user\\Documents\\project_py\\extraFile\\chromedriver")
driver.get("localhost:5500/index.html")

model = Sequential()
model.add(Dense(10, input_shape=(2,)))
model.add(Dense(2))

def cost(y_true, y_pred):
    return tf.constant(np.array([cost]))

model.compile(loss=cost, optimizer='adam')

input()

def getCost():
    global cost
    x = driver.execute_script('return createGole()')

    arr = np.array([[x['x'], x['y']]])

    y = model.predict(arr)
    print(y)

    driver.execute_script(f'doQ_learn(1,1,{y[0][0]},{y[0][1]})')
    sleep(5)

    cost = driver.execute_script('return getCost()')

    model.fit(arr , [0])

getCost()