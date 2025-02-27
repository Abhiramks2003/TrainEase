PGDMP     9                    {            postgres    15.4    15.4                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    5    postgres    DATABASE     {   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3353                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false                       0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    16439    class    TABLE     }   CREATE TABLE public.class (
    code character varying(4) NOT NULL,
    name character varying(20),
    noofseats integer
);
    DROP TABLE public.class;
       public         heap    postgres    false            �            1259    24576    day    TABLE     U   CREATE TABLE public.day (
    name character varying(10) NOT NULL,
    id integer
);
    DROP TABLE public.day;
       public         heap    postgres    false            �            1259    16419    station    TABLE     p   CREATE TABLE public.station (
    stn character varying(4) NOT NULL,
    name character varying(20) NOT NULL
);
    DROP TABLE public.station;
       public         heap    postgres    false            �            1259    16424    stops    TABLE     �   CREATE TABLE public.stops (
    tno integer NOT NULL,
    stn character varying(4) NOT NULL,
    arrival time without time zone,
    departure time without time zone,
    elapsed interval
);
    DROP TABLE public.stops;
       public         heap    postgres    false            �            1259    16398    train    TABLE     �   CREATE TABLE public.train (
    trainno integer NOT NULL,
    tname character varying(30) NOT NULL,
    source character varying(30) NOT NULL,
    dest character varying(30) NOT NULL,
    run character varying(7)
);
    DROP TABLE public.train;
       public         heap    postgres    false                      0    16439    class 
   TABLE DATA                 public          postgres    false    218                    0    24576    day 
   TABLE DATA                 public          postgres    false    219   6                 0    16419    station 
   TABLE DATA                 public          postgres    false    216   �                 0    16424    stops 
   TABLE DATA                 public          postgres    false    217   �                 0    16398    train 
   TABLE DATA                 public          postgres    false    215   |       |           2606    16443    class class_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.class
    ADD CONSTRAINT class_pkey PRIMARY KEY (code);
 :   ALTER TABLE ONLY public.class DROP CONSTRAINT class_pkey;
       public            postgres    false    218            ~           2606    24580    day day_pkey 
   CONSTRAINT     L   ALTER TABLE ONLY public.day
    ADD CONSTRAINT day_pkey PRIMARY KEY (name);
 6   ALTER TABLE ONLY public.day DROP CONSTRAINT day_pkey;
       public            postgres    false    219            z           2606    16428    stops pk_stop 
   CONSTRAINT     Q   ALTER TABLE ONLY public.stops
    ADD CONSTRAINT pk_stop PRIMARY KEY (tno, stn);
 7   ALTER TABLE ONLY public.stops DROP CONSTRAINT pk_stop;
       public            postgres    false    217    217            x           2606    16423    station station_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.station
    ADD CONSTRAINT station_pkey PRIMARY KEY (stn);
 >   ALTER TABLE ONLY public.station DROP CONSTRAINT station_pkey;
       public            postgres    false    216            v           2606    16402    train train_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.train
    ADD CONSTRAINT train_pkey PRIMARY KEY (trainno);
 :   ALTER TABLE ONLY public.train DROP CONSTRAINT train_pkey;
       public            postgres    false    215                       2606    16434    stops fk_stn    FK CONSTRAINT     j   ALTER TABLE ONLY public.stops
    ADD CONSTRAINT fk_stn FOREIGN KEY (stn) REFERENCES public.station(stn);
 6   ALTER TABLE ONLY public.stops DROP CONSTRAINT fk_stn;
       public          postgres    false    217    216    3192            �           2606    16429    stops fk_tno    FK CONSTRAINT     l   ALTER TABLE ONLY public.stops
    ADD CONSTRAINT fk_tno FOREIGN KEY (tno) REFERENCES public.train(trainno);
 6   ALTER TABLE ONLY public.stops DROP CONSTRAINT fk_tno;
       public          postgres    false    3190    217    215               �   x��н
�0�ݧ�[l������Xh��iLۀ5b���J��r����rh����3��{��V��Z���T
�x/i��*�l����b��b�R���̒SD��j�*ņ�<� {{p�s��a f�J������sn�����������u�r6����         y   x���v
Q���W((M��L�KI�T��K�M�Q�L�Ts�	uV�P.�J��(jZsy��7�ψ4}!����ƤiOMɃi5!�Ό�"�NS�t�eB����/8�������� ;�uc         �   x���M�0�=���/���.�5�J�r�`jk��7`8�=�|��f���F@V�3<�]����h�B=-�@���Iye�P�iC(�|!��iHɪ�p
�?�"m˕*�nr�AI�5|5�!��B9�0"k�T�8�3����3�y��J.�Q!���q�Ŋ[���Z|��1x�§� 9�Yk�l��	G�jV�z�j� �U2Ԁ         �   x�����@E{�b: ٘Y�Y+

|`hb�BAB����]��H�'[̙;�"/���+����_��������]I i���ҬN��o2Y��m��pw�7/�Z̴	���qQ�k0��81���_?(���QS��3ŉmA�n���2�1%�"�������r�%8w�����^?����{�����S�`�O�T>��H��| vw�W         8  x���Mk�@�����%)&~5�$V���V��:�K��nLh�}w�J9�{ya�0ϼ~�xq
~������C˰�0�6*�k�©9�=Ϝ�Zؙ. s�/���ҍ�
��~b�%x?��ٺY 2�X�o�xR�i����!^H5BC�]D��R�+Ͷ�\�ja��T`��|�T7H�����S�-�X�XVW��I���3MX5���;8�!���������K[��ݭ�P��vO^iܶ���iNv2lo�o_F���ʷ�a�7��9�S��i�z���;�#ՋDl�P�R�oR�c?8	�Ϸ+���A�����}     