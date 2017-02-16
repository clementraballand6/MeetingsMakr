#------------------------------------------------------------
#        Script MySQL.
#------------------------------------------------------------


#------------------------------------------------------------
# Table: user
#------------------------------------------------------------

CREATE TABLE user(
        id          int (11) Auto_increment  NOT NULL ,
        lastname    Varchar (255) NOT NULL ,
        firstname   Varchar (255) NOT NULL ,
        phone       Varchar (255) ,
        mail        Varchar (255) ,
        city        Varchar (255) ,
        postal_code Varchar (5) ,
        password    Varchar (255) NOT NULL ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: club
#------------------------------------------------------------

CREATE TABLE club(
        id          int (11) Auto_increment  NOT NULL ,
        name        Varchar (255) NOT NULL ,
        city        Varchar (255) NOT NULL ,
        postal_code Varchar (5) NOT NULL ,
        id_club    Int NOT NULL ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: event
#------------------------------------------------------------

CREATE TABLE event(
        start       Datetime ,
        end         Datetime ,
        id          int (11) Auto_increment  NOT NULL ,
        city        Varchar (100) NOT NULL ,
        postal_code Varchar (25) NOT NULL ,
        location    Varchar (150) ,
        detail      Varchar (500) ,
        type        Int ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: member
#------------------------------------------------------------

CREATE TABLE member(
        id        int (11) Auto_increment  NOT NULL ,
        mail      Varchar (255) ,
        tel       Varchar (255) ,
        firstname Varchar (255) NOT NULL ,
        lastname  Varchar (255) NOT NULL ,
        PRIMARY KEY (id )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: club_user
#------------------------------------------------------------

CREATE TABLE club_user(
        id_user  Int NOT NULL ,
        id_club Int NOT NULL ,
        PRIMARY KEY (id_user,id_club )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: event_club
#------------------------------------------------------------

CREATE TABLE event_club(
        id_event Int NOT NULL ,
        id_club Int NOT NULL ,
        PRIMARY KEY (id_event,id_club )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: event_member
#------------------------------------------------------------

CREATE TABLE event_member(
        id_member Int NOT NULL ,
        id_event  Int NOT NULL ,
        PRIMARY KEY (id_member ,id_event )
)ENGINE=InnoDB;


#------------------------------------------------------------
# Table: member_club
#------------------------------------------------------------

CREATE TABLE member_club(
        id_club  Int NOT NULL ,
        id_member Int NOT NULL ,
        PRIMARY KEY (id_club ,id_member )
)ENGINE=InnoDB;

ALTER TABLE club ADD CONSTRAINT FK_club_id_1 FOREIGN KEY (id_club) REFERENCES club(id);
ALTER TABLE club_user ADD CONSTRAINT FK_club_user_id FOREIGN KEY (id_user) REFERENCES user(id);
ALTER TABLE club_user ADD CONSTRAINT FK_club_user_id_club FOREIGN KEY (id_club) REFERENCES club(id);
ALTER TABLE event_club ADD CONSTRAINT FK_event_club_id FOREIGN KEY (id_event) REFERENCES event(id);
ALTER TABLE event_club ADD CONSTRAINT FK_event_club_id_club FOREIGN KEY (id_club) REFERENCES club(id);
ALTER TABLE event_member ADD CONSTRAINT FK_event_member_id FOREIGN KEY (id_member) REFERENCES member(id);
ALTER TABLE event_member ADD CONSTRAINT FK_event_member_id_event FOREIGN KEY (id_event) REFERENCES event(id);
ALTER TABLE member_club ADD CONSTRAINT FK_member_club_id FOREIGN KEY (id_club) REFERENCES club(id);
ALTER TABLE member_club ADD CONSTRAINT FK_member_club_id_member FOREIGN KEY (id_member) REFERENCES member(id);
