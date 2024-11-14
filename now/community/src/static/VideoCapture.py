import cv2
path= 'community\src\static\\'
mp4='park'
# 加载视频文件
cap = cv2.VideoCapture(f"{path}{mp4}.mp4")
c = 1

ret, frame = cap.read()
print(f"开始截取视频第：{c} 帧")
cv2.imwrite(f"{path}{mp4}.jpg", frame) # 保存截取的图像
print("所有帧都已经保存完成")

cap.release()