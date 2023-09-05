CREATE Database database_04_manh;

USE database_04_manh;
CREATE TABLE `Chi_tiet_su_dung_DV` (
  `MaDatPhong` varchar(15),
  `MaDV` varchar(15),
  `SoLuong` int,
  PRIMARY KEY (`MaDatPhong`, `MaDV`)
);

CREATE TABLE `DAT_PHONG` (
  `MaDatPhong` varchar(15) PRIMARY KEY,
  `MaPhong` varchar(15),
  `MaKH` varchar(15),
  `NgayDat` timestamp,
  `GioBatDau` time,
  `GioKetThuc` time,
  `TienDatCoc` float,
  `GhiChu` varchar(100),
  `TrangThaiDat` varchar(50)
);

CREATE TABLE `DICH_VU_DI_KEM` (
  `MaDV` varchar(15) PRIMARY KEY,
  `TenDV` varchar(100),
  `DonViTinh` varchar(50),
  `DonGia` float
);

CREATE TABLE `PHONG` (
  `MaPhong` varchar(15) PRIMARY KEY,
  `LoaiPhong` varchar(50),
  `SoKhachToiDa` int,
  `GiaPhong` float,
  `MoTa` varchar(100)
);

CREATE TABLE `KHACH_HANG` (
  `MaKH` varchar(15) PRIMARY KEY,
  `TenKH` varchar(50),
  `DiaChi` varchar(100),
  `SoDT` varchar(20)
);

ALTER TABLE `Chi_tiet_su_dung_DV` ADD FOREIGN KEY (`MaDV`) REFERENCES `DICH_VU_DI_KEM` (`MaDV`);

ALTER TABLE `Chi_tiet_su_dung_DV` ADD FOREIGN KEY (`MaDatPhong`) REFERENCES `DAT_PHONG` (`MaDatPhong`);

ALTER TABLE `DAT_PHONG` ADD FOREIGN KEY (`MaPhong`) REFERENCES `PHONG` (`MaPhong`);

ALTER TABLE `DAT_PHONG` ADD FOREIGN KEY (`MaKH`) REFERENCES `KHACH_HANG` (`MaKH`);

INSERT INTO `DICH_VU_DI_KEM` (`MaDV`, `TenDV`, `DonViTinh`, `DonGia`) VALUES
	('DV001', 'Beer', 'lon', 11000),
	('DV002', 'Nuoc ngot', 'lon', 8000),
	('DV003', 'Trai cay', 'dia', 35000),
	('DV004', 'Khan uot', 'cai', 2000);

INSERT INTO `KHACH_HANG` (`MaKH`, `TenKH`, `DiaChi`, `SoDT`) VALUES
	('KH0001', 'Nguyen Van B', 'Hoa xuan', '2313123123'),
	('KH0002', 'Nguyen Van B', 'Hoa hai', '0232323333'),
	('KH0003', 'Phan Van A', 'Cam le', '0383838338'),
	('KH0004', 'Phan Van B', 'Hoa xuan', '0232838238');

INSERT INTO `PHONG` (`MaPhong`, `LoaiPhong`, `SoKhachToiDa`, `GiaPhong`, `MoTa`) VALUES
	('P0001', 'Loai 1', 20, 40000, NULL),
	('P0002', 'Loai 1', 25, 100000, NULL),
	('P0003', 'Loai 2', 15, 70000, NULL),
	('P0004', 'Loai 3', 20, 70000, NULL);

INSERT INTO `DAT_PHONG` (`MaDatPhong`, `MaPhong`, `MaKH`, `NgayDat`, `GioBatDau`, `GioKetThuc`, `TienDatCoc`, `GhiChu`, `TrangThaiDat`) VALUES
	('DP0001', 'P0001', 'KH0002', '2016-03-26 01:16:39', '11:00:00', '13:30:00', 100000, NULL, 'Da dat'),
	('DP0002', 'P0001', 'KH0003', '2018-03-27 01:18:09', '17:15:00', '19:15:00', 50000, NULL, 'Da huy'),
	('DP0003', 'P0002', 'KH0002', '2017-03-26 01:19:17', '20:30:00', '22:15:00', 100000, NULL, 'Da dat'),
	('DP0004', 'P0003', 'KH0001', '2018-04-01 01:20:46', '19:30:00', '21:15:00', 200000, NULL, 'Da dat');

INSERT INTO `Chi_tiet_su_dung_DV` ( `MaDatPhong`, `MaDV`, `SoLuong`) VALUES
	( 'DP0001', 'DV001', 20),
	( 'DP0001', 'DV003', 3),
	( 'DP0001', 'DV002', 10),
	( 'DP0002', 'DV002', 10),
	( 'DP0002', 'DV003', 1),
	( 'DP0003', 'DV003', 2),
	( 'DP0003', 'DV004', 5);

--Câu 1
USE database_04_manh;
SELECT `DICH_VU_DI_KEM`.*,`Chi_tiet_su_dung_DV`.* 
FROM Chi_tiet_su_dung_DV 
INNER JOIN  DICH_VU_DI_KEM 
ON Chi_tiet_su_dung_DV.MaDV = DICH_VU_DI_KEM.MaDV
WHERE Chi_tiet_su_dung_DV.Soluong > 3 AND Chi_tiet_su_dung_DV.Soluong < 10;
--Câu 2
USE database_04_manh;
UPDATE PHONG SET GiaPhong = GiaPhong + 10000 WHERE SoKhachToiDa > 10;
SELECT * FROM PHONG;
--Câu 3
USE database_04_manh;
DELETE FROM Chi_tiet_su_dung_DV WHERE MaDatPhong IN(SELECT MaDatPhong FROM DAT_PHONG WHERE TrangThaiDat = 'Da huy');
DELETE FROM dat_phong WHERE TrangThaiDat = 'Da huy';
--Câu 4
USE database_04_manh;
SELECT TenKH FROM KHACH_HANG WHERE LEFT(TenKH,1) IN ("H","N","M") AND LENGTH(TenKH) <=20;
--Câu 5
USE database_04_manh;
SELECT DISTINCT TenKH FROM KHACH_HANG;
--Câu 6
USE database_04_manh;
SELECT MaDV, TenDV, DonViTinh, DonGia FROM DICH_VU_DI_KEM WHERE (DonViTinh = "Lon" AND DonGia > 10000) OR (DonViTinh = "Cai" AND DonGia < 5000)
--Câu 7
USE database_04_manh;
SELECT DAT_PHONG.MaDatPhong,DAT_PHONG.MaPhong,PHONG.LoaiPhong,PHONG.SoKhachToiDa,PHONG.GiaPhong,KHACH_HANG.MaKH,KHACH_HANG.TenKH,KHACH_HANG.SoDT,DAT_PHONG.NgayDat,DAT_PHONG.GioBatDau,DAT_PHONG.GioKetThuc,Chi_tiet_su_dung_DV.MaDV,Chi_tiet_su_dung_DV.SoLuong,DICH_VU_DI_KEM.DonGia
FROM PHONG
INNER JOIN DAT_PHONG ON PHONG.MaPhong = DAT_PHONG.MaPhong
INNER JOIN KHACH_HANG ON DAT_PHONG.MaKH = KHACH_HANG.MaKH
INNER JOIN Chi_tiet_su_dung_DV ON DAT_PHONG.MaDatPhong = Chi_tiet_su_dung_DV.MaDatPhong
INNER JOIN DICH_VU_DI_KEM ON Chi_tiet_su_dung_DV.MaDV = DICH_VU_DI_KEM.MaDV WHERE (YEAR(NgayDat) = 2016 OR YEAR(NgayDat) = 2017) AND (GiaPhong > 50000);