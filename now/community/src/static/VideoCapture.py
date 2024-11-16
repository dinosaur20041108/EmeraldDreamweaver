import cv2

# 使用原始字符串来避免转义字符的问题
path = 'community\src\static\\'
mp4 = 'Whale'
# 加载视频文件
cap = cv2.VideoCapture(f"{path}{mp4}.mp4")

# 检查视频是否成功打开
if not cap.isOpened():
    print("无法打开视频文件")
    exit()

frames_to_capture = 200

# 读取并保存视频帧
frame_count = 0
ret, frame = cap.read()
while ret and frame_count < 1000:
    frame_filename = f"{path}{mp4}.jpg"  
    if(frame_count==frames_to_capture ):cv2.imwrite(frame_filename, frame)  # 保存截取的图像
    frame_count += 1
    ret, frame = cap.read()  # 读取下一帧

print("帧已经保存完成")

cap.release()