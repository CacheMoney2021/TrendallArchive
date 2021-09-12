from PIL import Image
import os, cv2

# img = Image.open('image.tiff')
# img.save('image.png')


# arr = os.listdir()
# print(arr)

thisdir = os.getcwd()
for r, d, f in os.walk(thisdir):
    for file in f:
        if file.endswith('*.tif'):
            im = Image.open(file)
            im.save(file, format='PNG')
            print(file)

# for file in arr:
#     im = Image.open('imagedir/P-16-4.tif')
#     im.save('P-16-4.jpeg')
base_path = "data/images/"
new_path = "data/ims/"
try:
    for infile in os.listdir(base_path):
        print ("file : " + infile)
        read = cv2.imread(base_path + infile)
        outfile = infile.split('.')[0] + '.jpg'
        cv2.imwrite(new_path+outfile,read,[int(cv2.IMWRITE_JPEG_QUALITY), 200])
except Exception as e:
    print(e)   