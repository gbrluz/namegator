create schema namegator;

create table item (
    id serial,
    type text not null,
    description text not null
);

INSERT INTO public.item (type, description) values ( 'prefix', 'Air' )
INSERT INTO public.item (type, description) values ( 'prefix', 'Jet' );
INSERT INTO public.item (type, description) values ( 'prefix', 'Flight' );
INSERT INTO public.item (type, description) values ( 'sufix', 'Hub' );
INSERT INTO public.item (type, description) values ( 'sufix', 'Station' );
INSERT INTO public.item (type, description) values ( 'sufix', 'Mart' );