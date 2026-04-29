FROM docker.elastic.co/kibana/kibana:8.19.13

COPY ./plugins/elastalertKibanaPlugin-8.19.13.zip plugins/
RUN ./bin/kibana-plugin install file:////usr/share/kibana/plugins/elastalertKibanaPlugin-8.19.13.zip
