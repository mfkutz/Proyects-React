import { useMemo } from "react"
import { useCryptoStore } from "../stores/store"
import Spinner from "./Spinner"

export default function CryptoPriceDisplay() {
    const result = useCryptoStore((state) => state.result)
    const loading = useCryptoStore((state) => state.loading)

    const hasResult = useMemo(() => !Object.values(result).includes(''), [result])

    return (
        <div className="result-wrapper">
            {loading ? <Spinner /> : hasResult && (
                <>
                    <h2>Cotización</h2>
                    <div className="result">
                        <img
                            src={`https://cryptocompare.com/${result.IMAGEURL}`}
                            alt="Imagen criptomoneda"
                        />
                        <div>
                            <p>El precio es de: <span>{result.PRICE}</span></p>
                            <p>Precio mas alto del día: <span>{result.HIGHDAY}</span></p>
                            <p>Precio mas bajo del día: <span>{result.LOWDAY}</span></p>
                            <p>Variación 24hs: <span>{result.CHANGEPCT24HOUR}%</span></p>
                            <p>Última actualizaciÓn: <span>{result.LASTUPDATE}</span></p>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}
