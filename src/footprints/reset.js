module.exports = {
    nets: ['from', 'to'],
    params: {
        class: 'B', // for Button
        side: 'F'
    },
    body: p => `
    
    (module E73:SW_TACT_ALPS_SKQGABE010 (layer F.Cu) (tstamp 5BF2CC94)

        (descr "Low-profile SMD Tactile Switch, https://www.e-switch.com/system/asset/product_line/data_sheet/165/TL3342.pdf")
        (tags "SPST Tactile Switch")

        ${p.at /* parametric position */}
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
        
        ${'' /* outline */}
        (fp_line (start 2.75 1.25) (end 1.25 2.75) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start 2.75 -1.25) (end 1.25 -2.75) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start 2.75 -1.25) (end 2.75 1.25) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start -1.25 2.75) (end 1.25 2.75) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start -1.25 -2.75) (end 1.25 -2.75) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start -2.75 1.25) (end -1.25 2.75) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start -2.75 -1.25) (end -1.25 -2.75) (layer ${p.param.side}.SilkS) (width 0.15))
        (fp_line (start -2.75 -1.25) (end -2.75 1.25) (layer ${p.param.side}.SilkS) (width 0.15))
        
        ${'' /* pins */}
        (pad 1 smd rect (at -3.1 -1.85 ${p.rot}) (size 1.8 1.1) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.from})
        (pad 1 smd rect (at 3.1 -1.85 ${p.rot}) (size 1.8 1.1) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.from})
        (pad 2 smd rect (at -3.1 1.85 ${p.rot}) (size 1.8 1.1) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.to})
        (pad 2 smd rect (at 3.1 1.85 ${p.rot}) (size 1.8 1.1) (layers ${p.param.side}.Cu ${p.param.side}.Paste ${p.param.side}.Mask) ${p.net.to})
    )
    
    `
}