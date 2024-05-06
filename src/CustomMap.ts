import { YMap } from '@yandex/ymaps3-types';

type TMappable = { location: { lat: number; lng: number } };

export class CustomMap {
    private map: YMap;

    constructor(mapDivId: string) {
        ymaps3.ready.then(async () => {
            const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
                ymaps3;
            this.map = new YMap(document.getElementById(mapDivId)!, {
                location: {
                    center: [0, 0],
                    zoom: 1,
                },
            });
            this.map.addChild(new YMapDefaultSchemeLayer({}));
            this.map.addChild(new YMapDefaultFeaturesLayer({}));
        });
    }

    addMarker(mappable: TMappable): void {
        ymaps3.ready.then(async () => {
            const { YMapDefaultMarker } = await ymaps3.import(
                '@yandex/ymaps3-markers@0.0.1'
            );
            this.map.addChild(
                new YMapDefaultMarker({
                    coordinates: [mappable.location.lat, mappable.location.lng],
                    title: 'Hello World!',
                    subtitle: 'kind and bright',
                    color: 'blue',
                    popup: {
                        content: 'Popup on the default marker',
                        position: 'left',
                    },
                })
            );
        });
    }
}
